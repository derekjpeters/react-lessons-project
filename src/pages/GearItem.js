import { useParams } from "react-router-dom";

function GearItem() {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h3>Item Details</h3>
            <p>You're viewing product: {id}</p>
        </div>
    )
}

export default GearItem