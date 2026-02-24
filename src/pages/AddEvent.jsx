import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventsContext } from "../store/EventsContext";

const AddEvent = () => {
    const { addEvent } = useContext(EventsContext);
    const navigate = useNavigate();
const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
});

const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formData);
    navigate("/events");
};
  
return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Add Event</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={formData.title}
                onChange={handleChange}
                className="border p-2"
                required
                />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="border p-2"
                required
            />

            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border p-2"
                required
            />

            <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2"
            required
            />

            <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
            >
                Create Event
            </button>
        </form>
      </div>
    );
};

export default AddEvent;