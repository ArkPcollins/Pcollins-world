import { NotificationModel } from "./notification.model";
import { notificationQueue } from "../jobs/queues/notification.queue";
export class NotificationService {
    async create({ userId, title, message, type, actionUrl }) {
        const notification = await NotificationModel.create({
            userId,
            title,
            message,
            type: type || "INFO",
            actionUrl
        });
        // Add to queue for potential email delivery
        await notificationQueue.add("send-notification", {
            userId,
            title,
            message,
            type: type || "INFO",
            sendEmail: false, // Set to true if you want email notifications
        });
        return notification;
    }
    async getUserNotifications(userId, page = 1, limit = 20) {
        const notifications = await NotificationModel.find({ userId })
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);
        const total = await NotificationModel.countDocuments({ userId });
        const unreadCount = await this.getUnreadCount(userId);
        return {
            data: notifications,
            total,
            page,
            totalPages: Math.ceil(total / limit),
            unreadCount
        };
    }
    async markAsRead(notificationId, userId) {
        const notification = await NotificationModel.findOneAndUpdate({ _id: notificationId, userId }, { isRead: true }, { new: true });
        if (!notification)
            throw new Error("Notification not found");
        return notification;
    }
    async markAllAsRead(userId) {
        const result = await NotificationModel.updateMany({ userId, isRead: false }, { isRead: true });
        return { modifiedCount: result.modifiedCount };
    }
    async deleteNotification(notificationId, userId) {
        const notification = await NotificationModel.findOneAndDelete({
            _id: notificationId,
            userId
        });
        if (!notification)
            throw new Error("Notification not found");
        return true;
    }
    async getUnreadCount(userId) {
        return NotificationModel.countDocuments({ userId, isRead: false });
    }
}
