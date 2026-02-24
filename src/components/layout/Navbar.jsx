import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>LocalLoop</h2>
            <div style={styles.links}>
                <Link to="/">Landing</Link>
                <Link to="/home">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/community">Community</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/add-event">Add Event</Link>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        background: "#111",
        color: "white",
    },
    links: {
        display: "flex",
        gap: "1rem",
    },
    logo: {
        margin: 0,
    },
};

export default Navbar;
