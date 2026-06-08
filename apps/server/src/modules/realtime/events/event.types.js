export var SocketEvents;
(function (SocketEvents) {
    // notifications
    SocketEvents["NOTIFICATION"] = "notification";
    // chat
    SocketEvents["CHAT_MESSAGE"] = "chat:message";
    SocketEvents["CHAT_JOIN"] = "chat:join";
    // orders
    SocketEvents["ORDER_UPDATED"] = "order:updated";
    // savings
    SocketEvents["SAVINGS_UPDATED"] = "savings:updated";
    // property
    SocketEvents["PROPERTY_UPDATED"] = "property:updated";
    // admin
    SocketEvents["ADMIN_ALERT"] = "admin:alert";
})(SocketEvents || (SocketEvents = {}));
