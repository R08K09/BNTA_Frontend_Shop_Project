import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSlideshow from "../components/HeroSlideshow";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";
import { sliderImages } from "../sliderImages";

const VehicleContainer = () => {

    const [listOfVehicles, setListOfVehicles] = useState([]);
    const [vehicleSearch, setVehicleSearch] = useState([]);

    const fetchVehicles  = async () => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setListOfVehicles(data);
    }

    useEffect(() => {
        fetchVehicles();
    }, [])



    return ( 
        <div>
            <Header 
            fetchVehicles={fetchVehicles} 
            vehicleSearch={vehicleSearch}
            setVehicleSearch={setVehicleSearch}/>
            <HeroSlideshow slides={sliderImages}/>
            <VehicleForm/>
            <VehicleList listOfVehicles={listOfVehicles} />
            <p>Hi from container</p>
        </div>
     );
}
 
export default VehicleContainer;