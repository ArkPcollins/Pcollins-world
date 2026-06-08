import { SocketEvents } from "../events/event.types";
export const registerPropertyHandler = (io, socket) => {
    socket.on("property:view", (propertyId) => {
        io.emit(SocketEvents.PROPERTY_UPDATED, {
            propertyId,
            event: "viewed"
        });
    });
};
