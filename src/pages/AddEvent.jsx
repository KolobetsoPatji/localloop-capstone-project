import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { EventsContext } from "../store/EventsContext"

const AddEvent = () => {
    const { addEvent } = useContext(EventsContext)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({

    title: "",
    location: "",
    date: "",
    description: "",
});

const [errors, setErrors] = useState({})

const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }))
}

const handleSubmit = (e) => {
    e.preventDefault()

    let newErrors = {}

    if (!formData.title.trim()) {
        newErrors.title = "Event title is required"
    }

    if (!formData.date) {
        newErrorss.data = "Event date is required"
    }

    if (!formData.location.trim()) {
        newErrors.location = "Event location is required"
    }

    if (!formData.description.trim()) {
        newErrors.description = "Event description is required"
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
    }

    addEvent(formData)

    setFormData({
        title: "",
        date: "",
        location: "",
        description: "",
    })
   
    navigate("/events");
};
  
return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Add Event</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
           <div>
                <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${
                errors.date ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
            </div>
           
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
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Create Event
            </button>
        </form>
      </div>
    );
};

export default AddEvent;