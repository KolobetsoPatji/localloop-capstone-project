import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
            </h2>

            <p className="text-gray-600 mb-1">
                {event.location}
            </p>

            <p className="text-gray-500 mb-3">
                {event.date}
            </p>

            <Link
                to={`/events/${event.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
             >
               View Details
                </Link>
             </div>
    );
};

export default EventCard;