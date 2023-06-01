const VehicleSlider = ({sliderValue, setSliderValue, filterMaxPrice}) => {
    // console.log(maxPrice);

    return ( 
        <section className="vehicle-slider">
            <h2>Filter Vehicles by Price</h2>
            <p>Displaying vehicles with values up to: £{Math.floor(filterMaxPrice/100)}.00</p>
            <input 
            type="range"
            className="slider"
            value={sliderValue}
            
            step={0.1}
            onInput={(event) => setSliderValue(event.target.value)}
            style={{width: "50%"}} 
            />
        </section>
     );
}
 
export default VehicleSlider;