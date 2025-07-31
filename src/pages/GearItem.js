import { useParams, Link } from "react-router-dom";

const gearDetails = {
    jersey: {
        name: 'Team Jersey',
        price: '$49.99',
        image: '👕',
        description: 'Premium quality team jersey made from moisture-wicking fabric. Perfect for all sports activities.',
        features: ['Moisture-wicking fabric', 'Comfortable fit', 'Durable construction', 'Available in multiple sizes'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    ball: {
        name: 'Basketball',
        price: '$24.99',
        image: '🏀',
        description: 'Professional grade basketball with superior grip and bounce. Official size and weight.',
        features: ['Official size and weight', 'Superior grip', 'Durable rubber construction', 'Indoor/outdoor use'],
        sizes: ['Standard']
    },
    card: {
        name: 'Basketball Cards',
        price: '$12.99',
        image: '🃏',
        description: 'Collectible basketball trading cards featuring your favorite players and teams.',
        features: ['High-quality printing', 'Collectible value', 'Player statistics', 'Team information'],
        sizes: ['Pack of 10']
    }
}

function GearItem() {
    const {id} = useParams();
    console.log(id);
    
    const item = gearDetails[id];
    
    if (!item) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                    <div className="text-6xl mb-4">❌</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                    <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
                    <Link to="/gear" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                        Back to Gear
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Link to="/gear" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors duration-200">
                    ← Back to Gear
                </Link>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="bg-gradient-to-br from-orange-100 to-red-100 p-16 flex items-center justify-center">
                            <div className="text-9xl">{item.image}</div>
                        </div>
                        
                        {/* Product Details */}
                        <div className="p-8 lg:p-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">{item.name}</h1>
                            <div className="text-4xl font-bold text-orange-600 mb-6">{item.price}</div>
                            
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                {item.description}
                            </p>
                            
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
                                <ul className="space-y-2">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <span className="text-orange-600 mr-3">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Sizes:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {item.sizes.map((size, index) => (
                                        <span key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium">
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105">
                                    Add to Cart
                                </button>
                                <button className="flex-1 bg-white hover:bg-gray-50 text-orange-600 font-semibold py-4 px-8 rounded-lg text-lg border-2 border-orange-600 transition-all duration-200 transform hover:scale-105">
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GearItem