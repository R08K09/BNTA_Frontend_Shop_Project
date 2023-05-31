import Vehicle from "./Vehicle";

const VehicleList = ({listOfVehicles, vehicleSearch, filterMaxPrice, loggedInUserId, listOfCustomers, setListOfCustomers}) => {


    const filteredVehicleList = listOfVehicles.filter((vehicle) => vehicle.name.startsWith(vehicleSearch) && vehicle.price <= filterMaxPrice);
    


    const carList = filteredVehicleList.filter((vehicle) =>  vehicle.category === "Car")
    const boatList = filteredVehicleList.filter((vehicle) => vehicle.category === "Boat")
    const planeList = filteredVehicleList.filter((vehicle) => vehicle.category === "Plane")

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
        <div>
            <h2>Cars</h2>
                <section id="carList">
                    {carComponents}
                </section>
            <hr/>

            <h2>Boats</h2>
                <section id="boatList">
                    {boatComponents}
                </section>

            <hr/>
            <h2>Planes</h2>
                <section id="planeList">
                    {planeComponents}
                </section>
        </div>
     );
}
 
export default VehicleList;