import { useContext } from "react";
import { EventsContext } from "../store/EventsContext";
import EventCard from "../components/events/EventCard";

const Explore = () => {
    const { events } = useContext(EventsContext);
   
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">
                Explore Events
            </h1>

        <div className="grid gap-4">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    </div>
    );
};

export default Explore;