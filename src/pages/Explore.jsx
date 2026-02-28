import { useContext } from "react"
import { EventsContext } from "../store/EventsContext"
import EventCard from "../components/events/EventCard";

const Explore = () => {
    const { events } = useContext(EventsContext)
   
    return (
        <>
        {events.length === 0 ? (
            <p>No events yet. Be the first to add one.</p>
        ) : (
        <div className="grid gap-4">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
        )}
    </>
    )
}

export default Explore;