import { NotificationModel } from "./notification.model";

export class NotificationService {

  async create(
    userId: string,
    title: string,
    message: string
  ) {

    return NotificationModel.create({
      userId,
      title,
      message
    });

  }

  async markAsRead(
    notificationId: string
  ) {

    return NotificationModel.findByIdAndUpdate(
      notificationId,
      {
        isRead: true
      }
    );

  }

  async getUserNotifications(
    userId: string
  ) {

    return NotificationModel.find({
      userId
    }).sort({
      createdAt: -1
    });

  }
}