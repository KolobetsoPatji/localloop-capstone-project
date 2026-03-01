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
            <div className="rounded-xl p-8 shadow-md bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                <h1 className="text-3x1 font-bold mb-4 text-gray-800">{event.title}</h1>
                <p className="text-gray-700 mb-4">{event.location}</p>
                <p className="text-gray-700 mb-2">{event.date}</p>
                <p className="text-gray-800 leading-relaxed">{event.description}</p>
                
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