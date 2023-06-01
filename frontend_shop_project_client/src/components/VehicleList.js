import Vehicle from "./Vehicle";

const VehicleList = ({listOfVehicles, vehicleSearch, filterMaxPrice, loggedInUserId, listOfCustomers, setListOfCustomers}) => {


    const filteredVehicleList = listOfVehicles.filter((vehicle) => vehicle.name.toLowerCase().includes(vehicleSearch.toLowerCase()) && vehicle.price <= filterMaxPrice);
    

    const carList = filteredVehicleList.filter((vehicle) =>  vehicle.category === "Car")
    const boatList = filteredVehicleList.filter((vehicle) => vehicle.category === "Boat")
    const planeList = filteredVehicleList.filter((vehicle) => vehicle.category === "Plane")

    const carListSize = carList.length;
    const boatListSize = boatList.length;
    const planeListSize = planeList.length;

    const carComponents = carList.map((vehicle) => {
        return (
            <Vehicle vehicle = {vehicle} loggedInUserId={loggedInUserId} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers}/>
        );
    })

    const boatComponents = boatList.map((vehicle) => {
        return (
            <Vehicle vehicle = {vehicle} loggedInUserId={loggedInUserId} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers}/>
        );
    })

    const planeComponents = planeList.map((vehicle) => {
        return (
            <Vehicle vehicle = {vehicle} loggedInUserId={loggedInUserId} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers}/>
        );
    })



    return ( 
        <div className="vehicle-list">
            {carListSize > 0 ? 
            <>
                <h2>Cars</h2>
                    <section id="carList">
                        {carComponents}
                    </section>
                <hr/>
            </>
            :
            <></>}

            {boatListSize > 0 ? 
            <>
                <h2>Boats</h2>
                <section id="boatList">
                    {boatComponents}
                </section> 
                <hr/>
            </>
            :  
            <></>}

            {planeListSize > 0 ? 
            <>  
                <h2>Planes</h2>
                <section id="planeList">
                    {planeComponents}
                </section>
            </>
            :
            <></>}
        </div>
     );
}
 
export default VehicleList;