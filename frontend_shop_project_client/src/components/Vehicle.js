import { useEffect, useState } from "react";

import {images} from "../images";

const Vehicle = ({vehicle}) => {

    const [inspecting, setInspecting] = useState(false);
 

    const handleClick = () => {
        setInspecting(!inspecting);
    }

    const foundImage = images.find(image => image.id === vehicle.id);

    const imageComponent = <img src={foundImage.img} alt={vehicle.category} className="vehicle-image" />

    const displayPrice = (vehicle.price/100).toLocaleString();
    return (  
        <>
            {inspecting ? 
            <div className= "product-inspected" onClick={handleClick}>
                {imageComponent}
                <h3>{vehicle.name}</h3>
                <p>Price: £{displayPrice}.00</p>
                <p>Colour: {vehicle.colour}</p>
                <button>Add to cart</button>
            </div>
            : 
            <div className="product-not-inspected" onClick={handleClick}>
                {imageComponent}
                <h3>{vehicle.name}</h3>
            </div>
            }
        </>
    );
}
 
export default Vehicle;