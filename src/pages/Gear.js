import { Link, Routes, Route } from "react-router-dom";
import GearItem from './GearItem';  

const gearItems = [
    { 
        id: 'jersey', 
        name: 'Team Jersey',
        price: '$49.99',
        description: 'Premium quality team jersey for all sports',
        image: '👕'
    },
    { 
        id: 'ball', 
        name: 'Basketball',
        price: '$24.99',
        description: 'Professional grade basketball for serious players',
        image: '🏀'
    },
    { 
        id: 'card', 
        name: 'Basketball Cards',
        price: '$12.99',
        description: 'Collectible basketball trading cards',
        image: '🃏'
    }
]

function Gear() {
    console.log("Gear Page Loaded")
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Shop Sports <span className="text-orange-600">Gear</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover premium quality sports equipment and gear from top brands to elevate your game.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {gearItems.map(item => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                            <div className="p-8 text-center">
                                <div className="text-6xl mb-4">{item.image}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <div className="text-3xl font-bold text-orange-600 mb-6">{item.price}</div>
                                <Link 
                                    to={`/gear/${item.id}`}
                                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Gear?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-orange-600 text-4xl mb-4">⭐</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                            <p className="text-gray-600">Only the finest materials and craftsmanship</p>
                        </div>
                        <div className="text-center">
                            <div className="text-orange-600 text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Shipping</h3>
                            <p className="text-gray-600">Get your gear delivered quickly and safely</p>
                        </div>
                        <div className="text-center">
                            <div className="text-orange-600 text-4xl mb-4">💯</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                            <p className="text-gray-600">30-day money-back guarantee on all items</p>
                        </div>
                    </div>
                </div>

                {/* Nested route placeholder */}
                <Routes>
                    <Route path=':id' element={<GearItem />} />
                </Routes>
            </div>
        </div>
    )
}

export default Gear;