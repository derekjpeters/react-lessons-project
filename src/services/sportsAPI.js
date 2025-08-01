import axios from 'axios';

const THESPORTSDB_BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

export const sportsAPI = {
  // Get upcoming events for different leagues
  getUpcomingEvents: async (leagueId) => {
    try {
      const response = await axios.get(`${THESPORTSDB_BASE_URL}/eventsnextleague.php?id=${leagueId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      throw error;
    }
  },

  // Get recent events for different leagues
  getRecentEvents: async (leagueId) => {
    try {
      const response = await axios.get(`${THESPORTSDB_BASE_URL}/eventslast.php?id=${leagueId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching recent events:', error);
      throw error;
    }
  },

  // Get league table/standings
  getLeagueTable: async (leagueId, season) => {
    try {
      const response = await axios.get(`${THESPORTSDB_BASE_URL}/lookuptable.php?l=${leagueId}&s=${season}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching league table:', error);
      throw error;
    }
  },

  // Get team info
  getTeamInfo: async (teamId) => {
    try {
      const response = await axios.get(`${THESPORTSDB_BASE_URL}/lookupteam.php?id=${teamId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching team info:', error);
      throw error;
    }
  },

  // Get events by date
  getEventsByDate: async (date) => {
    try {
      const response = await axios.get(`${THESPORTSDB_BASE_URL}/eventsday.php?d=${date}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching events by date:', error);
      throw error;
    }
  },

  // Search events
  searchEvents: async (event, season = null) => {
    try {
      const url = season 
        ? `${THESPORTSDB_BASE_URL}/searchevents.php?e=${event}&s=${season}`
        : `${THESPORTSDB_BASE_URL}/searchevents.php?e=${event}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error searching events:', error);
      throw error;
    }
  }
};

// Popular league IDs for quick access
export const LEAGUE_IDS = {
  // Basketball
  NBA: '4387',
  
  // Football (American)
  NFL: '4391',
  
  // Soccer/Football
  PREMIER_LEAGUE: '4328',
  CHAMPIONS_LEAGUE: '4480',
  WORLD_CUP: '4756',
  MLS: '4346',
  
  // Other popular leagues
  MLB: '4424',
  NHL: '4380'
};

// Helper function to format date for API calls (YYYY-MM-DD)
export const formatDateForAPI = (date) => {
  return date.toISOString().split('T')[0];
};

// Helper function to get today's events
export const getTodaysEvents = () => {
  const today = new Date();
  return sportsAPI.getEventsByDate(formatDateForAPI(today));
};