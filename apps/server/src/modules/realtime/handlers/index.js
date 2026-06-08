import { registerChatHandler } from "./chat.handler";
import { registerOrderHandler } from "./order.handler";
import { registerPropertyHandler } from "./property.handler";
import { registerSavingsHandler } from "./saving.handler";
export const registerHandlers = (io, socket) => {
    // join personal room
    socket.join(socket.data.user.id);
    registerChatHandler(io, socket);
    registerOrderHandler(io, socket);
    registerSavingsHandler(io, socket);
    registerPropertyHandler(io, socket);
};
