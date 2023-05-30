import { useEffect, useState } from "react";
import Header from "./Header";
import HeroSlideshow from "../components/HeroSlideshow";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";
import { sliderImages } from "../sliderImages";
import VehicleSlider from "../components/VehicleSlider";

const VehicleContainer = () => {

    const [listOfVehicles, setListOfVehicles] = useState([]);
    const [vehicleSearch, setVehicleSearch] = useState([]);
    const [filterMaxPrice, setFilterMaxPrice] = useState(0);
    const [sliderValue, setSliderValue] = useState(100);

    const [mostExpensiveVehiclePrice, setMostExpensiveVehiclePrice] = useState(0);

    const fetchVehicles  = async () => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        const vehiclePrices = data.map((vehicle) => vehicle.price);
        // console.log(vehiclePrices.sort()[vehiclePrices.length-1]);
        // console.log(Math.max(...vehiclePrices));
        const highestPrice = Math.max(...vehiclePrices);
        // console.log(highestPrice);
        setListOfVehicles(data);
        setMostExpensiveVehiclePrice(highestPrice);
        setFilterMaxPrice(highestPrice);
    }


    useEffect(() => {
        fetchVehicles();
        // const vehiclePrices = listOfVehicles.map((vehicle) => vehicle.price);
        // setMaxVehiclePrice(Math.max(...vehiclePrices));
    }, [])

    useEffect(() => {
        setFilterMaxPrice(Math.floor((((101**(sliderValue/100))-1)/100)*mostExpensiveVehiclePrice));
        // setMaxPrice(sliderValue)*maxPrice;
        console.log(sliderValue);
    },[sliderValue])

    return ( 
        <div>
            <Header
            setVehicleSearch={setVehicleSearch}/>
            <HeroSlideshow slides={sliderImages}/>
            {/* <VehicleForm setMaxPrice={setMaxPrice} sliderValue={sliderValue}
            maxVehiclePrice={maxVehiclePrice} maxPrice={maxPrice}/> */}
            <VehicleSlider sliderValue={sliderValue} setSliderValue={setSliderValue}  filterMaxPrice={filterMaxPrice}/>
            <VehicleList listOfVehicles={listOfVehicles} vehicleSearch={vehicleSearch} filterMaxPrice={filterMaxPrice} />
            <p>Hi from container</p>
        </div>
     );
}
 
export default VehicleContainer;