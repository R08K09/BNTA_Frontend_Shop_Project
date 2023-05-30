import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

const VehicleForm = ({maxPrice, setSliderValue}) => {

    const handleSliderChange = (event) => {
        // setMaxPrice(Math.ceil(101**(event.target.value/100-1)*maxVehiclePrice));
        setSliderValue(event.target.value);
    }
    console.log(maxPrice);



    return (  
        <div>
            <input 
            type="range"
            className="slider"
            onChange={handleSliderChange}
            style={{width: "70rem"}} 
            />
            <p>£{Math.floor(maxPrice/100)}.00</p>
            
        </div>
    );
}
 

 
export default VehicleForm;