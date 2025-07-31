
function News() {
    const newsArticles = [
        {
            id: 1,
            title: "Championship Finals This Weekend",
            excerpt: "The biggest sports event of the year is coming up this weekend with record-breaking attendance expected.",
            category: "Basketball",
            date: "2 hours ago",
            readTime: "3 min read"
        },
        {
            id: 2,
            title: "New Training Facility Opens Downtown",
            excerpt: "State-of-the-art training facility featuring the latest equipment and technology for athletes of all levels.",
            category: "Facilities",
            date: "5 hours ago",
            readTime: "2 min read"
        },
        {
            id: 3,
            title: "Youth Sports Program Expansion",
            excerpt: "Local community announces expansion of youth sports programs to include more age groups and activities.",
            category: "Community",
            date: "1 day ago",
            readTime: "4 min read"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Sports <span className="text-purple-600">News</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest sports news, updates, and insights from around the world.
                    </p>
                </div>

                {/* Featured Article */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-16 flex items-center justify-center">
                            <div className="text-8xl">📰</div>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="text-purple-600 font-semibold mb-2">FEATURED</div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Breaking: Major Sports Platform Launch
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Sports Hub officially launches with cutting-edge features for athletes, fans, and sports enthusiasts. 
                                Join thousands of users already experiencing the future of sports technology.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 self-start">
                                Read Full Story
                            </button>
                        </div>
                    </div>
                </div>

                {/* News Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {newsArticles.map(article => (
                        <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                                        {article.category}
                                    </span>
                                    <span className="text-gray-500 text-sm">{article.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                                    <button className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Coming Soon Section */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <div className="text-6xl mb-6">🚀</div>
                    <h2 className="text-3xl font-bold mb-4">More Features Coming Soon!</h2>
                    <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                        We're working on bringing you real-time news updates, personalized feeds, 
                        and breaking news notifications. Stay tuned for these exciting features!
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">📡</div>
                            <h3 className="font-semibold mb-2">Real-Time Updates</h3>
                            <p className="text-purple-100 text-sm">Live sports scores and news</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">🎯</div>
                            <h3 className="font-semibold mb-2">Personalized Feed</h3>
                            <p className="text-purple-100 text-sm">News tailored to your interests</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">🔔</div>
                            <h3 className="font-semibold mb-2">Push Notifications</h3>
                            <p className="text-purple-100 text-sm">Never miss breaking news</p>
                        </div>
                    </div>

                    <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                        Get Notified
                    </button>
                </div>
            </div>
        </div>
    )
}

export default News;