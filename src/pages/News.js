
import { useState, useEffect, useCallback } from 'react';
import { newsAPI, formatPublishDate } from '../services/newsAPI';

function News() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [featuredArticle, setFeaturedArticle] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const fetchNews = useCallback(async () => {
        setLoading(true);
        try {
            let newsData;
            if (selectedCategory === 'all') {
                newsData = await newsAPI.getSportsNews('us', 20);
            } else {
                newsData = await newsAPI.getNewsByCategory(selectedCategory, 20);
            }
            
            if (newsData && newsData.articles) {
                setArticles(newsData.articles);
                setFeaturedArticle(newsData.articles[0]);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    }, [selectedCategory]);

    useEffect(() => {
        fetchNews();
    }, [selectedCategory, refreshKey, fetchNews]);

    const handleRefresh = () => {
        setRefreshKey(prev => prev + 1);
    };

    const categories = [
        { key: 'all', label: 'All Sports' },
        { key: 'basketball', label: 'Basketball' },
        { key: 'football', label: 'Football' },
        { key: 'soccer', label: 'Soccer' },
        { key: 'baseball', label: 'Baseball' },
        { key: 'hockey', label: 'Hockey' }
    ];

    const getReadTime = (content) => {
        if (!content) return '2 min read';
        const words = content.split(' ').length;
        const readTime = Math.ceil(words / 200);
        return `${readTime} min read`;
    };

    const displayArticles = articles.slice(1, 7);

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

                {/* Category Filter */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg p-2 shadow-lg overflow-x-auto">
                        <div className="flex gap-2">
                            {categories.map(category => (
                                <button
                                    key={category.key}
                                    onClick={() => setSelectedCategory(category.key)}
                                    className={`px-4 py-2 rounded-md font-medium whitespace-nowrap transition-colors ${
                                        selectedCategory === category.key
                                            ? 'bg-purple-600 text-white'
                                            : 'text-gray-600 hover:bg-purple-50'
                                    }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div className="text-4xl mb-4">📰</div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loading Sports News...</h2>
                        <div className="animate-pulse bg-purple-200 h-4 rounded w-48 mx-auto"></div>
                    </div>
                ) : (
                    <>
                        {/* Featured Article */}
                        {featuredArticle && (
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {featuredArticle.urlToImage ? (
                                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                                            <img 
                                                src={featuredArticle.urlToImage} 
                                                alt={featuredArticle.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="hidden w-full h-full items-center justify-center p-16">
                                                <div className="text-8xl">📰</div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-16 flex items-center justify-center">
                                            <div className="text-8xl">📰</div>
                                        </div>
                                    )}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="text-purple-600 font-semibold mb-2">FEATURED</div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 line-clamp-3">
                                            {featuredArticle.title}
                                        </h2>
                                        <p className="text-lg text-gray-700 mb-6 leading-relaxed line-clamp-4">
                                            {featuredArticle.description || featuredArticle.content || 'Breaking sports news and updates from around the world.'}
                                        </p>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm text-gray-500">
                                                {formatPublishDate(featuredArticle.publishedAt)}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {getReadTime(featuredArticle.content)}
                                            </span>
                                        </div>
                                        <button 
                                            onClick={() => featuredArticle.url && featuredArticle.url !== '#' && window.open(featuredArticle.url, '_blank')}
                                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 self-start"
                                        >
                                            Read Full Story
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* News Articles Grid */}
                        {displayArticles.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {displayArticles.map((article, index) => (
                                    <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium truncate max-w-[120px]">
                                                    {article.source?.name || 'Sports'}
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    {formatPublishDate(article.publishedAt)}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {article.description || article.content || 'Sports news and updates.'}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-500 text-sm">
                                                    {getReadTime(article.content)}
                                                </span>
                                                <button 
                                                    onClick={() => article.url && article.url !== '#' && window.open(article.url, '_blank')}
                                                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
                                                >
                                                    Read More →
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-12">
                                <div className="text-4xl mb-4">📰</div>
                                <p className="text-gray-600">No articles found for this category. Try selecting a different sport.</p>
                            </div>
                        )}
                    </>
                )}

                {/* Features Section */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Live Sports News Features</h2>
                    <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                        Get the latest sports news from trusted sources around the world, updated in real-time.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">📡</div>
                            <h3 className="font-semibold mb-2">Real-Time Updates</h3>
                            <p className="text-purple-100 text-sm">Fresh sports news as it happens</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">🎯</div>
                            <h3 className="font-semibold mb-2">Multiple Sports</h3>
                            <p className="text-purple-100 text-sm">Coverage across all major sports</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <div className="text-3xl mb-3">🔔</div>
                            <h3 className="font-semibold mb-2">Trusted Sources</h3>
                            <p className="text-purple-100 text-sm">News from reliable sports outlets</p>
                        </div>
                    </div>

                    <button 
                        onClick={handleRefresh}
                        className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                    >
                        Refresh News
                    </button>
                </div>
            </div>
        </div>
    )
}

export default News;