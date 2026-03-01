import { Link } from "react-router-dom";
import { useContext } from "react";
import { EventsContext } from "../../store/EventsContext";

const EventCard = ({ event }) => {
    const { deleteEvent } = useContext(EventsContext)
   
   return (
        <div className="rounded-lg p-5 shadow-sm hover:shadow-lg hover:scale-[1.01] transition duration-200 bg-gradient-to-br from-blue-100 ro-purple-100">
            <h3 className="text-lg font-semibold text-gray-800">
                {event.title}
            </h3>

            <p className="text-gray-700 mb-3">
                {event.location}
            </p>

            <p className="text-gray-400 mb-1">
                {event.date}
            </p>
            
            <Link
                to={`/events/${event.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
               View Details
                </Link>

                <button
                onClick={() => deleteEvent(event.id)}
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition ml-2"
                >
                    Delete
                </button>
            </div>
    )
}

export default EventCard;