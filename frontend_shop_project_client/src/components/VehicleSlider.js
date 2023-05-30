const VehicleSlider = ({sliderValue, setSliderValue, filterMaxPrice}) => {
    // console.log(maxPrice);

    return ( 
        <>
            <input 
            type="range"
            className="slider"
            value={sliderValue}
            
            step={0.1}
            onInput={(event) => setSliderValue(event.target.value)}
            style={{width: "70rem"}} 
            />
            <p>£{Math.floor(filterMaxPrice/100)}.00</p>
        </>
     );
}
 
export default VehicleSlider;