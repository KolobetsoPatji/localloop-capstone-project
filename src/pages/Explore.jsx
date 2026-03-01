import { useContext } from "react"
import { EventsContext } from "../store/EventsContext"
import EventCard from "../components/events/EventCard";

const Explore = () => {
    const { events } = useContext(EventsContext)
   
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">Explore Events</h1>

        {events.length === 0 ? (
            <p className="text-center text-gray-500 text-lg mt-10">
                No events yet. Be the first to add one.</p>
        ) : (
        <div className="grid gap-4 md:grid-cols-2">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
        )}
    </div>
    )
}

export default Explore;