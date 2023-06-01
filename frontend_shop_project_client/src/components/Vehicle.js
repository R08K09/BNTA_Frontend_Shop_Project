import { useEffect, useState } from "react";

import {images} from "../images";
import BuyProductModal from "../modals/BuyProductModal";


const Vehicle = ({vehicle, loggedInUserId, listOfCustomers, setListOfCustomers}) => {

    const [inspecting, setInspecting] = useState(false);
 

    const handleClick = () => {
        setInspecting(!inspecting);
    }

    const foundImage = images.find(image => image.id === vehicle.id);

    const imageComponent = <img src={foundImage.img} alt={vehicle.category} className="vehicle-image" onClick={handleClick}/>



    const displayPrice = (vehicle.price/100).toLocaleString();


    let handlePurchaseAvailability;

    if(vehicle.sold){
        handlePurchaseAvailability = <p>Sold Out</p>;
    }
    else if(loggedInUserId <= 0){
        handlePurchaseAvailability = <p>Please log in to purchase</p>;
    }
    else {
        handlePurchaseAvailability = <BuyProductModal vehicle={vehicle} loggedInUserId={loggedInUserId} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers}/>
    }
    
    
    return (  
        <>
            {inspecting ? 
            <div className= "product-inspected">
                {imageComponent}
                <h3>{vehicle.name}</h3>
                <p>Price: £{displayPrice}.00</p>
                <p>Colour: {vehicle.colour}</p>
                {handlePurchaseAvailability}
            </div>
            : 
            <div className="product-not-inspected">
                {imageComponent}
                <h3>{vehicle.name}</h3>
                {vehicle.sold ? <h3>Out of Stock</h3> : <></>}
            </div>
            }
        </>
    );
}
 
export default Vehicle;