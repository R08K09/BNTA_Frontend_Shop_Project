import { useEffect, useState } from "react";
import Header from "./Header";
import HeroSlideshow from "../components/HeroSlideshow";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";
import { sliderImages } from "../sliderImages";
import VehicleSlider from "../components/VehicleSlider";

const VehicleContainer = ({listOfCustomers, setLoggedInUserId, setListOfCustomers, loggedInUserId}) => {

    const [listOfVehicles, setListOfVehicles] = useState([]);
    const [vehicleSearch, setVehicleSearch] = useState("");
    const [filterMaxPrice, setFilterMaxPrice] = useState(0);
    const [sliderValue, setSliderValue] = useState(100);

    const [mostExpensiveVehiclePrice, setMostExpensiveVehiclePrice] = useState(0);
    

    const fetchVehicles  = async () => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        const vehiclePrices = data.map((vehicle) => vehicle.price);
        const highestPrice = Math.max(...vehiclePrices);
        setListOfVehicles(data);
        setMostExpensiveVehiclePrice(highestPrice);
        setFilterMaxPrice(highestPrice);
    }


    useEffect(() => {
        fetchVehicles();
    }, [])

    useEffect(() => {
        setFilterMaxPrice(Math.floor((((101**(sliderValue/100))-1)/100)*mostExpensiveVehiclePrice));
        console.log(sliderValue);
    },[sliderValue])

    return ( 
        <div>
            <Header
            listOfCustomers={listOfCustomers}
            setListOfCustomers={setListOfCustomers}
            setVehicleSearch={setVehicleSearch}
            setLoggedInUserId ={setLoggedInUserId}
            loggedInUserId={loggedInUserId}/>
            <HeroSlideshow slides={sliderImages}/>
            {/* <VehicleForm setMaxPrice={setMaxPrice} sliderValue={sliderValue}
            maxVehiclePrice={maxVehiclePrice} maxPrice={maxPrice}/> */}
            <VehicleSlider sliderValue={sliderValue} setSliderValue={setSliderValue}  filterMaxPrice={filterMaxPrice}/>
            <hr/>
            <VehicleList listOfVehicles={listOfVehicles} vehicleSearch={vehicleSearch} filterMaxPrice={filterMaxPrice} loggedInUserId={loggedInUserId} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers}/>
          <hr/>
        </div>
     );
}
 
export default VehicleContainer;