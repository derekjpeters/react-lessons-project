
# Sports Hub - React Application

A comprehensive React-based sports platform that brings together live sports data, news, and gear information in one seamless experience. This modern web application demonstrates advanced React development practices while providing real-time sports content and an engaging user interface.

## Features

- **🏆 Live Sports Data** - Real-time scores, schedules, and game information via TheSportsDB API
- **📰 Sports News** - Latest sports news and updates with NewsAPI integration
- **🛍️ Sports Gear Catalog** - Browse and explore sports equipment and gear
- **📱 Responsive Design** - Optimized for desktop and mobile devices using Tailwind CSS
- **🎨 Modern UI/UX** - Clean, intuitive interface with smooth animations and transitions
- **🔗 Dynamic Routing** - Seamless navigation with React Router DOM
- **📧 Contact Integration** - EmailJS-powered contact forms

## Pages & Functionality

- **🏠 Home**: Dynamic dashboard featuring today's games, latest sports news, and featured content
- **ℹ️ About**: Information about the Sports Hub platform
- **📞 Contact**: Interactive contact form with EmailJS integration
- **🎮 Games**: Live sports scores, schedules, and game tracking across multiple leagues
- **🏈 Gear**: Sports equipment catalog with detailed product information
- **📰 News**: Comprehensive sports news feed with categorized content and search functionality

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-lessons-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration (Optional)**
   - Create a `.env` file in the root directory
   - Add your NewsAPI key for live news data:
     ```
     REACT_APP_NEWS_API_KEY=your_newsapi_key_here
     ```
   - Get a free API key from [NewsAPI.org](https://newsapi.org)
   - **Note**: The app includes fallback mock data if no API key is provided

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.js       # Navigation component
├── pages/              # Application pages
│   ├── Home.js         # Dashboard with live data
│   ├── About.js        # About page
│   ├── Contact.js      # Contact form
│   ├── Games.js        # Sports scores & schedules
│   ├── Gear.js         # Sports equipment catalog
│   ├── GearItem.js     # Individual gear details
│   └── News.js         # Sports news feed
├── services/           # API integrations
│   ├── newsAPI.js      # NewsAPI service
│   └── sportsAPI.js    # TheSportsDB service
└── styles/             # CSS styling files
    ├── App.css
    ├── Contact.css
    └── index.css
```

## Technology Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 7.7.1
- **Styling**: Tailwind CSS 3.4.17
- **HTTP Client**: Axios 1.11.0
- **Email Integration**: EmailJS Browser 4.4.1
- **Testing**: React Testing Library
- **Build Tool**: Create React App

## API Integration

### Sports Data
- **TheSportsDB API**: Provides live sports scores, schedules, and team information
- **Supported Leagues**: NBA, NFL, Premier League, Champions League, MLB, NHL, MLS, and more
- **Real-time Data**: Current game scores, upcoming fixtures, and league standings

### News Integration
- **NewsAPI**: Delivers latest sports news from multiple sources
- **Mock Data Fallback**: Comprehensive fallback system with sample sports news
- **Categories**: Basketball, Football, Soccer, Baseball, Hockey, and general sports

## Available Scripts

- `npm start` — Start development server (http://localhost:3000)
- `npm run build` — Build optimized production bundle
- `npm test` — Run test suite
- `npm run eject` — Eject from Create React App (one-way operation)

## Future Enhancements

- 🔐 **User Authentication** - Personal dashboards and favorite teams
- 🎨 **Theme Customization** - Dark/light mode toggle
- 📊 **Advanced Analytics** - Detailed sports statistics and trends
- 🔍 **Enhanced Search** - Global search across news, games, and gear
- 📱 **PWA Features** - Offline functionality and push notifications
- 🏟️ **Stadium Information** - Venue details and maps
- 📈 **Fantasy Sports Integration** - Player stats and fantasy recommendations

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **TheSportsDB** - For providing comprehensive sports data
- **NewsAPI** - For delivering up-to-date sports news
- **Unsplash** - For high-quality sports imagery
- **Tailwind CSS** - For the utility-first CSS framework
- **React Community** - For the amazing ecosystem and tools

## Support

If you encounter any issues or have questions:

1. Check the [existing issues](../../issues) on GitHub
2. Create a new issue if your problem isn't addressed
3. Include detailed information about your environment and the issue

## Learn More

- [React Documentation](https://reactjs.org/) - Learn about React
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started) - Learn about CRA
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [React Router Documentation](https://reactrouter.com/) - Learn about routing in React
