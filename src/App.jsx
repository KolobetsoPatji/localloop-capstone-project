import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import  Landing from "./pages/Landing";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import EventDetails from "./pages/EventDetails";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import AddEvent from "./pages/AddEvent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/events" element={<Explore />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
        </Routes>
        </>
  );
}

export default App;