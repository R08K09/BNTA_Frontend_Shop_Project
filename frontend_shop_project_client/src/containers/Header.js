const Header = ({fetchVehicles, vehicleSearch, setVehicleSearch}) => {


    const handleSearchInput = (e) => {
        setVehicleSearch(e.target.value);
    }





    return ( 
        <header className="header">
            <div className="header-container">

                <div className="company-tags">
                    {/* logo here */}
                    <h1>CompanyNameHere</h1>
                </div>
                <div className="customer-tags">
                    <button>Log In/Sign Up</button>
                    <button>My Account</button>
                </div>
            </div>

                <nav className="nav-bar">
                    <a href="#carList">Cars</a>
                    <a href="#planeList">Planes</a>
                    <a href="#boatList">Boats</a>

                    <div className="search_input_bar">
                        <input 
                            type="text"
                            placeholder="Search for Vehicle"
                            onInput={handleSearchInput}/>
                        <button onClick={fetchVehicles}>Search</button>
                     </div>
            
                </nav>
            
        </header>
     );
}
 
export default Header;