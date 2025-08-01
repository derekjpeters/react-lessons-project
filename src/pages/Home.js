import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { newsAPI, formatPublishDate } from '../services/newsAPI';
import { getTodaysEvents } from '../services/sportsAPI';

function Home() {
    const navigate = useNavigate();
    const [latestNews, setLatestNews] = useState([]);
    const [todaysGames, setTodaysGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHomeData();
    }, []);

    const fetchHomeData = async () => {
        try {
            // Get latest news (top 3)
            const newsData = await newsAPI.getSportsNews('us', 3);
            if (newsData && newsData.articles) {
                setLatestNews(newsData.articles);
            }

            // Get today's games (top 3)
            const gamesData = await getTodaysEvents();
            if (gamesData && gamesData.events) {
                setTodaysGames(gamesData.events.slice(0, 3));
            }
        } catch (error) {
            console.error('Error fetching home data:', error);
        } finally {
            setLoading(false);
        }
    };
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
                           See Scores
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
                        <div className="text-blue-600 text-4xl mb-4">⚽</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Scores</h3>
                        <p className="text-gray-600">Track live games, schedules, and sports scores</p>
                    </div>
                </div>
            </div>

            {/* Latest News Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Latest Sports News</h2>
                    <button 
                        onClick={() => navigate('/news')}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        View All News →
                    </button>
                </div>
                
                {loading ? (
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                                <div className="animate-pulse">
                                    <div className="bg-gray-300 h-4 rounded mb-4"></div>
                                    <div className="bg-gray-200 h-3 rounded mb-2"></div>
                                    <div className="bg-gray-200 h-3 rounded w-3/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {latestNews.map((article, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                {article.urlToImage && (
                                    <div className="h-48 overflow-hidden rounded-t-xl">
                                        <img 
                                            src={article.urlToImage} 
                                            alt={article.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {e.target.style.display = 'none'}}
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium truncate max-w-[120px]">
                                            {article.source?.name || 'Sports'}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {formatPublishDate(article.publishedAt)}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {article.description || article.content || 'Sports news and updates.'}
                                    </p>
                                    <button 
                                        onClick={() => article.url && article.url !== '#' && window.open(article.url, '_blank')}
                                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                                    >
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Today's Games Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Today's Games</h2>
                        <button 
                            onClick={() => navigate('/games')}
                            className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            View All Games →
                        </button>
                    </div>
                    
                    {loading ? (
                        <div className="grid md:grid-cols-3 gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-gray-50 rounded-xl shadow-lg p-6">
                                    <div className="animate-pulse">
                                        <div className="bg-gray-300 h-4 rounded mb-4"></div>
                                        <div className="bg-gray-200 h-8 rounded mb-2"></div>
                                        <div className="bg-gray-200 h-3 rounded w-1/2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : todaysGames.length > 0 ? (
                        <div className="grid md:grid-cols-3 gap-6">
                            {todaysGames.map((game, index) => (
                                <div key={game.idEvent || index} className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                            {game.strSport || 'Sports'}
                                        </span>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                                            game.strStatus === 'Match Finished' ? 'bg-gray-100 text-gray-600' :
                                            game.strStatus === 'Not Started' ? 'bg-blue-100 text-blue-600' :
                                            'bg-red-100 text-red-600'
                                        }`}>
                                            {game.strStatus === 'Match Finished' ? 'Finished' :
                                             game.strStatus === 'Not Started' ? 'Upcoming' : 'Live'}
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-right flex-1 min-w-0">
                                                <p className="font-semibold text-xs truncate">{game.strHomeTeam}</p>
                                                {game.intHomeScore && (
                                                    <p className="text-xl font-bold text-blue-600">{game.intHomeScore}</p>
                                                )}
                                            </div>
                                            <div className="mx-2 text-gray-400 text-xs flex-shrink-0">vs</div>
                                            <div className="text-left flex-1 min-w-0">
                                                <p className="font-semibold text-xs truncate">{game.strAwayTeam}</p>
                                                {game.intAwayScore && (
                                                    <p className="text-xl font-bold text-blue-600">{game.intAwayScore}</p>
                                                )}
                                            </div>
                                        </div>
                                        {game.strTime && (
                                            <p className="text-xs text-gray-500 mt-2">
                                                {new Date(`${game.dateEvent}T${game.strTime}`).toLocaleTimeString('en-US', {
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    hour12: true
                                                })}
                                            </p>
                                        )}
                                        {game.strLeague && (
                                            <p className="text-xs text-gray-400 mt-1">{game.strLeague}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="text-4xl mb-4">📅</div>
                            <p className="text-gray-600">No games scheduled for today.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;