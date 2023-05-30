import { useEffect, useState } from "react";
import Header from "./Header";
import HeroSlideshow from "../components/HeroSlideshow";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";
import { sliderImages } from "../sliderImages";

const VehicleContainer = () => {

    const [listOfVehicles, setListOfVehicles] = useState([]);
    const [vehicleSearch, setVehicleSearch] = useState([]);
    const [maxPrice, setMaxPrice] = useState(0);

    let maxVehiclePrice;

    const fetchVehicles  = async () => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        const vehiclePrices = data.map((vehicle) => vehicle.price);
        maxVehiclePrice = Math.max(...vehiclePrices);
        setListOfVehicles(data);
        setMaxPrice(maxVehiclePrice);
    }

    useEffect(() => {
        fetchVehicles();
    }, [])


    return ( 
        <div>
            <Header
            setVehicleSearch={setVehicleSearch}/>
            <HeroSlideshow slides={sliderImages}/>
            <VehicleForm setMaxPrice={setMaxPrice} maxVehiclePrice={maxVehiclePrice} maxPrice={maxPrice}/>
            <VehicleList listOfVehicles={listOfVehicles} vehicleSearch={vehicleSearch} maxPrice={maxPrice} />
            <p>Hi from container</p>
        </div>
     );
}
 
export default VehicleContainer;