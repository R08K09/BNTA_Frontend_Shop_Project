import { useEffect, useState } from "react";

import {images} from "../images";
import BuyProductModal from "./BuyProductModal";

const Vehicle = ({vehicle, loggedInUserId}) => {

    const [inspecting, setInspecting] = useState(false);
 

    const handleClick = () => {
        setInspecting(!inspecting);
    }

    const foundImage = images.find(image => image.id === vehicle.id);

    const imageComponent = <img src={foundImage.img} alt={vehicle.category} className="vehicle-image" onClick={handleClick}/>



    const displayPrice = (vehicle.price/100).toLocaleString();
    return (  
        <>
            {inspecting ? 
            <div className= "product-inspected">
                {imageComponent}
                <h3>{vehicle.name}</h3>
                <p>Price: £{displayPrice}.00</p>
                <p>Colour: {vehicle.colour}</p>
                <BuyProductModal vehicle={vehicle} loggedInUserId={loggedInUserId}/>
            </div>
            : 
            <div className="product-not-inspected">
                {imageComponent}
                <h3>{vehicle.name}</h3>
            </div>
            }
        </>
    );
}
 
export default Vehicle;