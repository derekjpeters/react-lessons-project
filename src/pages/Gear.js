import { Link, Routes, Route } from "react-router-dom";
import GearItem from './GearItem';  

const gearItems = [
    { id: 'jersey', name: 'Team Jersey'},
    { id: 'ball', name: 'Basketball'},
    { id: 'card', name: 'Basketball Cards'}
]

function Gear() {
    console.log("Gear Page Loaded")
    return (
        <div>
            <h2>Shop Sports Gear</h2>
            <ul>
                {gearItems.map(item => (
                    <li key={item.id}>
                        <Link to ={`/gear/${item.id}`}>{item.name}</Link>
                        
                    </li>
                ))}
            </ul>
            {/* Nested route placeholder */}
            <Routes>
                <Route path = ':id' element = {<GearItem />} />
            </Routes>
        </div>
    )
}

export default Gear;