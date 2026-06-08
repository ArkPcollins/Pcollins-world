import { SocketEvents } from "../events/event.types";
export const registerSavingsHandler = (io, socket) => {
    socket.on("savings:update", (data) => {
        io.to(data.userId).emit(SocketEvents.SAVINGS_UPDATED, {
            planId: data.planId,
            amount: data.amount
        });
    });
};
