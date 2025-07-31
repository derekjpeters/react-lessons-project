import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="bg-slate-900 text-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
							Sports Hub
						</Link>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-all duration-200">
								Home
							</Link>
							<Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-all duration-200">
								About
							</Link>
							<Link to="/gear" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-all duration-200">
								Gear
							</Link>
							<Link to="/news" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-all duration-200">
								News
							</Link>
							<Link to="/games" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-all duration-200">
								Games
							</Link>
							<Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200">
								Contact
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
