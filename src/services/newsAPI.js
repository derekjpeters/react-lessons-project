import axios from 'axios';

// Note: You'll need to get a free API key from https://newsapi.org
// For demo purposes, we'll use a placeholder and provide fallback data
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY || 'demo_key';
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';

export const newsAPI = {
  // Get sports news headlines
  getSportsNews: async (country = 'us', pageSize = 20) => {
    try {
      if (NEWS_API_KEY === 'demo_key') {
        // Return mock data if no API key is provided
        return getMockSportsNews('all');
      }
      
      const response = await axios.get(`${NEWS_API_BASE_URL}/top-headlines`, {
        params: {
          category: 'sports',
          country: country,
          pageSize: pageSize,
          apiKey: NEWS_API_KEY
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching sports news:', error);
      // Fallback to mock data on error
      return getMockSportsNews('all');
    }
  },

  // Search sports news by query
  searchSportsNews: async (query, sortBy = 'publishedAt', pageSize = 20) => {
    try {
      if (NEWS_API_KEY === 'demo_key') {
        return getMockSportsNews(query);
      }
      
      const response = await axios.get(`${NEWS_API_BASE_URL}/everything`, {
        params: {
          q: `${query} sports`,
          sortBy: sortBy,
          pageSize: pageSize,
          language: 'en',
          apiKey: NEWS_API_KEY
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching sports news:', error);
      return getMockSportsNews(query);
    }
  },

  // Get news by specific sports category
  getNewsByCategory: async (sport, pageSize = 20) => {
    try {
      if (NEWS_API_KEY === 'demo_key') {
        return getMockSportsNews(sport);
      }
      
      const response = await axios.get(`${NEWS_API_BASE_URL}/everything`, {
        params: {
          q: sport,
          sortBy: 'publishedAt',
          pageSize: pageSize,
          language: 'en',
          apiKey: NEWS_API_KEY
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching news by category:', error);
      return getMockSportsNews(sport);
    }
  }
};

// Mock data for demonstration purposes
const getMockSportsNews = (category = 'all') => {
  const allArticles = {
    basketball: [
      {
        source: { id: 'espn', name: 'ESPN' },
        author: 'ESPN Staff',
        title: 'NBA Finals: Championship Game Tonight - Fans Anticipate Historic Matchup',
        description: 'The NBA Finals reach their climax tonight as two powerhouse teams battle for the championship title in what promises to be an unforgettable game.',
        url: 'https://www.espn.com/nba',
        urlToImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop',
        publishedAt: new Date().toISOString(),
        content: 'The stage is set for tonight\'s championship game as basketball fans around the world prepare for what could be one of the most exciting NBA Finals in recent history...'
      },
      {
        source: { id: 'nba', name: 'NBA.com' },
        author: 'NBA Staff',
        title: 'Record-Breaking Performance in Last Night\'s Game',
        description: 'A young player sets a new franchise record with an incredible 50-point game, leading his team to victory.',
        url: 'https://www.nba.com',
        urlToImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        content: 'Last night witnessed basketball history as the rookie sensation delivered a career-defining performance...'
      },
      {
        source: { id: 'bleacher-report', name: 'Bleacher Report' },
        author: 'BR Staff',
        title: 'NBA Trade Deadline: Major Moves Shake Up League',
        description: 'Several blockbuster trades completed before the deadline could reshape the playoff picture.',
        url: 'https://bleacherreport.com',
        urlToImage: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        content: 'The trade deadline brought significant changes to multiple NBA rosters...'
      }
    ],
    football: [
      {
        source: { id: 'nfl', name: 'NFL.com' },
        author: 'NFL Staff',
        title: 'NFL Draft 2025: Top Prospects Making Headlines',
        description: 'College football stars are making their mark as they prepare for the upcoming NFL Draft. Here are the top prospects to watch.',
        url: 'https://www.nfl.com/draft',
        urlToImage: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        content: 'As the NFL Draft approaches, scouts and fans alike are keeping a close eye on several standout college players...'
      },
      {
        source: { id: 'espn', name: 'ESPN' },
        author: 'ESPN Football',
        title: 'Super Bowl Preparations: Teams Begin Final Push',
        description: 'With the Super Bowl approaching, teams are making final preparations for the biggest game of the year.',
        url: 'https://www.espn.com/nfl',
        urlToImage: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        content: 'Super Bowl preparations are in full swing as teams fine-tune their strategies...'
      },
      {
        source: { id: 'fox-sports', name: 'Fox Sports' },
        author: 'Fox NFL Team',
        title: 'Quarterback Battle: Rising Stars Make Their Mark',
        description: 'Young quarterbacks across the league are establishing themselves as the future of the NFL.',
        url: 'https://www.foxsports.com/nfl',
        urlToImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 10800000).toISOString(),
        content: 'The new generation of NFL quarterbacks is showing impressive skills and leadership...'
      }
    ],
    soccer: [
      {
        source: { id: 'fox-sports', name: 'Fox Sports' },
        author: 'Fox Soccer Team',
        title: 'Premier League: Weekend Matches Feature Top Teams',
        description: 'This weekend\'s Premier League fixtures include several high-stakes matches between top-tier teams competing for championship positions.',
        url: 'https://www.foxsports.com/soccer',
        urlToImage: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        content: 'Football fans are in for a treat this weekend as the Premier League showcases some of its biggest rivalries...'
      },
      {
        source: { id: 'espn', name: 'ESPN' },
        author: 'ESPN Soccer',
        title: 'Champions League: Quarterfinal Draws Announced',
        description: 'The Champions League quarterfinal matchups have been revealed, setting up exciting clashes between Europe\'s elite clubs.',
        url: 'https://www.espn.com/soccer',
        urlToImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 14400000).toISOString(),
        content: 'The Champions League draw has produced some mouth-watering matchups for the quarterfinals...'
      },
      {
        source: { id: 'mls', name: 'MLS Soccer' },
        author: 'MLS Staff',
        title: 'MLS Season Kicks Off: New Teams, New Rivalries',
        description: 'Major League Soccer begins another exciting season with expansion teams and renewed rivalries.',
        url: 'https://www.mlssoccer.com',
        urlToImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 18000000).toISOString(),
        content: 'The new MLS season promises excitement with fresh faces and classic rivalries...'
      }
    ],
    baseball: [
      {
        source: { id: 'mlb', name: 'MLB.com' },
        author: 'MLB Reporters',
        title: 'Baseball Spring Training: Teams Prepare for 2025 Season',
        description: 'Major League Baseball teams are in full swing with spring training as they prepare for what promises to be an exciting 2025 season.',
        url: 'https://www.mlb.com',
        urlToImage: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 10800000).toISOString(),
        content: 'Spring training is underway and baseball fans are getting their first look at how their favorite teams are shaping up...'
      },
      {
        source: { id: 'espn', name: 'ESPN' },
        author: 'ESPN Baseball',
        title: 'World Series Champions Begin Title Defense',
        description: 'The defending World Series champions are looking to repeat as they begin preparations for the new season.',
        url: 'https://www.espn.com/mlb',
        urlToImage: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 21600000).toISOString(),
        content: 'The reigning champions are focused on defending their World Series title...'
      }
    ],
    hockey: [
      {
        source: { id: 'nhl', name: 'NHL.com' },
        author: 'NHL Writers',
        title: 'NHL Playoffs: Intense Competition as Teams Fight for Stanley Cup',
        description: 'The NHL playoffs are heating up with several close series as teams battle their way toward the Stanley Cup Finals.',
        url: 'https://www.nhl.com',
        urlToImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 14400000).toISOString(),
        content: 'Hockey fans are witnessing some incredible playoff action as teams give their all in pursuit of the Stanley Cup...'
      },
      {
        source: { id: 'espn', name: 'ESPN' },
        author: 'ESPN Hockey',
        title: 'Trade Deadline Moves Reshape Playoff Picture',
        description: 'Several key trades before the deadline have dramatically changed the Stanley Cup playoff landscape.',
        url: 'https://www.espn.com/nhl',
        urlToImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
        publishedAt: new Date(Date.now() - 25200000).toISOString(),
        content: 'The trade deadline brought significant changes that could impact the Stanley Cup race...'
      }
    ]
  };

  if (category === 'all') {
    // Return a mix of all sports
    const mixed = [
      ...allArticles.basketball.slice(0, 2),
      ...allArticles.football.slice(0, 2),
      ...allArticles.soccer.slice(0, 1),
      ...allArticles.baseball.slice(0, 1)
    ];
    return {
      status: 'ok',
      totalResults: mixed.length,
      articles: mixed
    };
  }

  return {
    status: 'ok',
    totalResults: allArticles[category]?.length || 0,
    articles: allArticles[category] || []
  };
};

// Helper function to format publish date
export const formatPublishDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'Just now';
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }
};