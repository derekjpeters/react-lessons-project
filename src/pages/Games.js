
function Games() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Games & <span className="text-emerald-600">Events</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay up to date with the latest games, tournaments, and sporting events happening around the world.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center mb-12">
                    <div className="text-6xl mb-6">🎮</div>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Coming Soon!</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        We're working hard to bring you an amazing gaming experience with live tournaments, 
                        interactive challenges, and real-time event tracking. Stay tuned for updates!
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-emerald-50 p-6 rounded-xl">
                            <div className="text-emerald-600 text-3xl mb-3">🏆</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Live Tournaments</h3>
                            <p className="text-gray-600 text-sm">Compete in real-time tournaments</p>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-xl">
                            <div className="text-emerald-600 text-3xl mb-3">📅</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Event Schedules</h3>
                            <p className="text-gray-600 text-sm">Never miss your favorite events</p>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-xl">
                            <div className="text-emerald-600 text-3xl mb-3">🎯</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Challenges</h3>
                            <p className="text-gray-600 text-sm">Test your skills and win prizes</p>
                        </div>
                    </div>

                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                        Notify Me When Available
                    </button>
                </div>

                <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-semibold mb-4">Want to be the first to know?</h3>
                    <p className="text-emerald-100 mb-6">
                        Sign up for our newsletter to get notified when our gaming platform launches!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-white text-emerald-600 font-semibold py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games;