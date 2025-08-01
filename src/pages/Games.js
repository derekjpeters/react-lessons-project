
import { useState, useEffect } from 'react';
import { sportsAPI, LEAGUE_IDS, getTodaysEvents } from '../services/sportsAPI';

function Games() {
    const [todaysEvents, setTodaysEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSport, setSelectedSport] = useState('all');

    useEffect(() => {
        fetchSportsData();
    }, []);

    const fetchSportsData = async () => {
        setLoading(true);
        try {
            // Get today's events
            const todaysData = await getTodaysEvents();
            setTodaysEvents(todaysData.events || []);

            // Get upcoming events from multiple leagues
            const nbaEvents = await sportsAPI.getUpcomingEvents(LEAGUE_IDS.NBA);
            const nflEvents = await sportsAPI.getUpcomingEvents(LEAGUE_IDS.NFL);
            const mlbEvents = await sportsAPI.getUpcomingEvents(LEAGUE_IDS.MLB);
            
            // Combine and limit upcoming events
            const combined = [
                ...(nbaEvents.events || []),
                ...(nflEvents.events || []),
                ...(mlbEvents.events || [])
            ].slice(0, 6);
            
            setUpcomingEvents(combined);
        } catch (error) {
            console.error('Error fetching sports data:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatEventTime = (dateStr, timeStr) => {
        if (!dateStr || !timeStr) return 'TBD';
        try {
            const eventDate = new Date(`${dateStr}T${timeStr}`);
            return eventDate.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        } catch {
            return 'TBD';
        }
    };

    const getEventStatus = (event) => {
        if (event.strStatus === 'Match Finished') return 'Finished';
        if (event.strStatus === 'Not Started') return 'Upcoming';
        return event.strStatus || 'Live';
    };

    const filteredTodaysEvents = selectedSport === 'all' 
        ? todaysEvents.slice(0, 6)
        : todaysEvents.filter(event => 
            event.strSport?.toLowerCase().includes(selectedSport.toLowerCase())
          ).slice(0, 6);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Sports <span className="text-emerald-600">Games & Scores</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay up to date with live scores, schedules, and results from your favorite sports.
                    </p>
                </div>

                {/* Sport Filter */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg p-2 shadow-lg">
                        {['all', 'basketball', 'football', 'soccer', 'baseball'].map(sport => (
                            <button
                                key={sport}
                                onClick={() => setSelectedSport(sport)}
                                className={`px-4 py-2 rounded-md font-medium capitalize transition-colors ${
                                    selectedSport === sport
                                        ? 'bg-emerald-600 text-white'
                                        : 'text-gray-600 hover:bg-emerald-50'
                                }`}
                            >
                                {sport === 'all' ? 'All Sports' : sport}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div className="text-4xl mb-4">⚽</div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loading Sports Data...</h2>
                        <div className="animate-pulse bg-emerald-200 h-4 rounded w-48 mx-auto"></div>
                    </div>
                ) : (
                    <>
                        {/* Today's Events */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Today's Games</h2>
                            {filteredTodaysEvents.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredTodaysEvents.map((event, index) => (
                                        <div key={event.idEvent || index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                                                    {event.strSport || 'Sports'}
                                                </span>
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                    getEventStatus(event) === 'Live' ? 'bg-red-100 text-red-600' :
                                                    getEventStatus(event) === 'Finished' ? 'bg-gray-100 text-gray-600' :
                                                    'bg-blue-100 text-blue-600'
                                                }`}>
                                                    {getEventStatus(event)}
                                                </span>
                                            </div>
                                            <div className="text-center">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="text-right flex-1 min-w-0">
                                                        <p className="font-semibold truncate text-sm">{event.strHomeTeam}</p>
                                                        {event.intHomeScore && (
                                                            <p className="text-2xl font-bold text-emerald-600">{event.intHomeScore}</p>
                                                        )}
                                                    </div>
                                                    <div className="mx-2 text-gray-400 text-sm flex-shrink-0">vs</div>
                                                    <div className="text-left flex-1 min-w-0">
                                                        <p className="font-semibold truncate text-sm">{event.strAwayTeam}</p>
                                                        {event.intAwayScore && (
                                                            <p className="text-2xl font-bold text-emerald-600">{event.intAwayScore}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-500 mt-2">
                                                    {formatEventTime(event.dateEvent, event.strTime)}
                                                </p>
                                                {event.strLeague && (
                                                    <p className="text-xs text-gray-400 mt-1">{event.strLeague}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                                    <div className="text-4xl mb-4">📅</div>
                                    <p className="text-gray-600">No games scheduled for today in the selected category.</p>
                                </div>
                            )}
                        </div>

                        {/* Upcoming Events */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upcoming Games</h2>
                            {upcomingEvents.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {upcomingEvents.map((event, index) => (
                                        <div key={event.idEvent || index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                                    {event.strSport || 'Sports'}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {formatEventTime(event.dateEvent, event.strTime)}
                                                </span>
                                            </div>
                                            <div className="text-center">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-right flex-1 min-w-0">
                                                        <p className="font-semibold truncate text-sm">{event.strHomeTeam}</p>
                                                    </div>
                                                    <div className="mx-2 text-gray-400 text-sm flex-shrink-0">vs</div>
                                                    <div className="text-left flex-1 min-w-0">
                                                        <p className="font-semibold truncate text-sm">{event.strAwayTeam}</p>
                                                    </div>
                                                </div>
                                                {event.strLeague && (
                                                    <p className="text-sm text-gray-500 mt-2">{event.strLeague}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                                    <div className="text-4xl mb-4">🔮</div>
                                    <p className="text-gray-600">No upcoming games found. Check back later!</p>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Features Section */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-semibold mb-4">Live Sports Features</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">📊</div>
                            <h4 className="font-semibold mb-2">Live Scores</h4>
                            <p className="text-emerald-100 text-sm">Real-time game scores and updates</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">📅</div>
                            <h4 className="font-semibold mb-2">Game Schedules</h4>
                            <p className="text-emerald-100 text-sm">Never miss your favorite team's games</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">🏆</div>
                            <h4 className="font-semibold mb-2">Multiple Sports</h4>
                            <p className="text-emerald-100 text-sm">NBA, NFL, Soccer, and more</p>
                        </div>
                    </div>
                    <button 
                        onClick={fetchSportsData}
                        className="bg-white text-emerald-600 font-semibold py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
                    >
                        Refresh Data
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Games;