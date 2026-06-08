export var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["EMAIL_VERIFICATION"] = 0] = "EMAIL_VERIFICATION";
    NotificationType[NotificationType["PASSWORD_RESET"] = 1] = "PASSWORD_RESET";
    NotificationType[NotificationType["KYC_APPROVED"] = 2] = "KYC_APPROVED";
    NotificationType[NotificationType["KYC_REJECTED"] = 3] = "KYC_REJECTED";
    NotificationType[NotificationType["SAVINGS_CONTRIBUTION"] = 4] = "SAVINGS_CONTRIBUTION";
    NotificationType[NotificationType["SAVINGS_MATURITY"] = 5] = "SAVINGS_MATURITY";
    NotificationType[NotificationType["ORDER_CREATED"] = 6] = "ORDER_CREATED";
    NotificationType[NotificationType["ORDER_PAID"] = 7] = "ORDER_PAID";
    NotificationType[NotificationType["ORDER_SHIPPED"] = 8] = "ORDER_SHIPPED";
    NotificationType[NotificationType["ORDER_DELIVERED"] = 9] = "ORDER_DELIVERED";
    NotificationType[NotificationType["RENT_REMINDER"] = 10] = "RENT_REMINDER";
    NotificationType[NotificationType["INSPECTION_BOOKED"] = 11] = "INSPECTION_BOOKED";
})(NotificationType || (NotificationType = {}));
