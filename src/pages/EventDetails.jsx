import { useParams, Link } from "react-router-dom";
import { useContext } from "react"; 
import { EventsContext } from "../store/EventsContext";

const EventDetails = () => {
    const { id } = useParams();
    const { events } = useContext(EventsContext);
   
    const event = events.find((e) => e.id === Number(id));

    if (!event) {
        return <p className="p-6">Event not found.</p>;
    }
        return (
            <div className="p-6">
                <h1 className="text-2x1 font-bold mb-4">{event.title}</h1>
                <p className="mb-2">{event.location}</p>
                <p className="mb-2">{event.date}</p>
                <p className="mb-4">{event.description}</p>
                
                <Link
                to="/events"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Back to Events
                </Link>
            </div>
        );
    };
   

export default EventDetails;