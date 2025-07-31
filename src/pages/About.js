
function About() {
    console.log('About page loaded')
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About Our <span className="text-blue-600">Project</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the story behind Sports Hub and our mission to connect athletes and sports enthusiasts worldwide.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        At Sports Hub, we believe that sports have the power to unite people, build character, and create lasting memories. 
                        Our platform is designed to provide athletes and sports enthusiasts with everything they need to pursue their passion.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        From premium equipment and gear to the latest sports news and interactive games, we're here to support your 
                        sporting journey every step of the way.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-3">✓</span>
                                Premium sports equipment and gear
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-3">✓</span>
                                Latest sports news and updates
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-3">✓</span>
                                Interactive games and challenges
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-3">✓</span>
                                Community support and connection
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-3">⭐</span>
                                Quality and excellence in everything
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-3">⭐</span>
                                Building strong communities
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-3">⭐</span>
                                Innovation and continuous improvement
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-3">⭐</span>
                                Accessibility for all skill levels
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
                    <p className="text-blue-100 mb-6">
                        Ready to take your sporting experience to the next level? Join thousands of athletes who trust Sports Hub.
                    </p>
                    <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;