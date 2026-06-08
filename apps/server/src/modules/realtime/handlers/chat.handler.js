import { SocketEvents } from "../events/event.types";
export const registerChatHandler = (io, socket) => {
    socket.on("chat:join", (roomId) => {
        socket.join(roomId);
    });
    socket.on("chat:message", ({ roomId, message }) => {
        io.to(roomId).emit(SocketEvents.CHAT_MESSAGE, {
            userId: socket.data.user.id,
            message,
            timestamp: new Date()
        });
    });
};
