import { createContext, useState } from "react"
import initialEvents from "../data/events"

export const EventsContext = createContext()

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState(initialEvents)

    const addEvent = (newEvent) => {
        setEvents((prevEvents) => [
            ...prevEvents,
            { ...newEvent, id: Date.now() },
        ])
    }
        
        const deleteEvent = (id) => {
            setEvents((prevEvents) =>
            prevEvents.filter((event) => event.id !== id)
        )
    }

    return (
        <EventsContext.Provider 
            value={{ events, addEvent, deleteEvent }}
        >
            {children}
        </EventsContext.Provider>
    )
}