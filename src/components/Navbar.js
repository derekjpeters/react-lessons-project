import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/gear">Gear</Link>
			<Link to="/news">News</Link>
			<Link to="/games">Games</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	);
}

export default Navbar;
