import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSlideshow from "../components/HeroSlideshow";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";

const VehicleContainer = () => {

    const [listOfVehicles, setListOfVehicles] = useState([]);

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
            <Header/>
            <HeroSlideshow/>
            <VehicleForm/>
            <VehicleList listOfVehicles={listOfVehicles} />
            <p>Hi from container</p>
        </div>
     );
}
 
export default VehicleContainer;