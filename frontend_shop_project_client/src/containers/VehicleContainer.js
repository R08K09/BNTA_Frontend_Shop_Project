import Header from "../components/Header";
import HeroSlideshow from "../components/HeroSlideshow";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";

const VehicleContainer = () => {
    return ( 
        <div>
            <Header/>
            <HeroSlideshow/>
            <VehicleForm/>
            <VehicleList/>
            <p>Hi from container</p>
        </div>
     );
}
 
export default VehicleContainer;