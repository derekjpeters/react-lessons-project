import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to the Sports Hub</h1>
            <p>Buy gear. Read news. Join the game.</p>
            <button onClick={() => navigate('/gear')}>Shop Now</button>
        </div>
    )
}

export default Home;