import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Welcome to the 
                        <span className="text-blue-600"> Sports Hub</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Your ultimate destination for premium sports gear, latest news, and exciting games. 
                        Join our community and elevate your game.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => navigate('/gear')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Shop Now
                        </button>
                        <button 
                            onClick={() => navigate('/games')}
                            className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg border-2 border-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Play Games
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-blue-600 text-4xl mb-4">🏆</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Gear</h3>
                        <p className="text-gray-600">Discover top-quality sports equipment from leading brands</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-blue-600 text-4xl mb-4">📰</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest News</h3>
                        <p className="text-gray-600">Stay updated with the latest sports news and trends</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-blue-600 text-4xl mb-4">🎮</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Fun Games</h3>
                        <p className="text-gray-600">Enjoy interactive games and challenges</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;