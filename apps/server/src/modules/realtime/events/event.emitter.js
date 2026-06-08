let io;
export const setIO = (instance) => {
    io = instance;
};
export const emitEvent = (event, userId, payload) => {
    if (!io)
        return;
    io.to(userId).emit(event, payload);
};
