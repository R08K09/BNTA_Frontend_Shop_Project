const Vehicle = ({vehicle}) => {

    const displayPrice = (vehicle.price/100).toLocaleString();
    return (  
        <div>
            <h3>{vehicle.name}</h3>
            <p>Price: £{displayPrice}.00</p>
            <p>Colour: {vehicle.colour}</p>
        </div>
    );
}
 
export default Vehicle;