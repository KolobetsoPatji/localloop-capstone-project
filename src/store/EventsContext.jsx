import { createContext, useState } from "react";
import eventsData from "../data/events";

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState(eventsData);

    const addEvent = (newEvent) => {
        const eventWithId = {
            ...newEvent,
            id: Date.now(),
        };
        
        setEvents((prevEvents) => [
            ...prevEvents, eventWithId
        ]);
    };

    return (
        <EventsContext.Provider value={{ events, addEvent }}>
            {children}
        </EventsContext.Provider>
    );
};