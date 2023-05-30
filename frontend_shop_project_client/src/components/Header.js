const Header = ({fetchVehicles, vehicleSearch, setVehicleSearch}) => {

    return ( 
        <header>
            <div className="header-container">

                <div className="company-tags">
                    {/* logo here */}
                    <h1>*CompanyNameHere</h1>
                </div>
                <div className="customer-tags">
                    <button>Log In/Sign Up</button>
                    <button>My Account</button>
                </div>
            </div>

                <nav className="nav-bar">
                    <a href="#">Cars</a>
                    <a href="#">Planes</a>
                    <a href="#">Boats</a>

                    <div className="search_input_bar"> 
                        <input 
                            type="text" 
                            value={vehicleSearch} 
                            placeholder="Search for a meal.."
                            onChange={(e) => setVehicleSearch(e.target.value)} />
                        <button onClick={fetchVehicles}>Search</button>
                     </div>
            
                </nav>
            
        </header>
     );
}
 
export default Header;