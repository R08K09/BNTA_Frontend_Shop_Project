
import LogInModal from "../components/LogInModal";

const Header = ({fetchVehicles, vehicleSearch, setVehicleSearch, listOfCustomers, setListOfCustomers, setLoggedInUserId}) => {

    
    // const handleOpenLogInModal = () => setOpenLogInModal(true);
    // const handleCloseLogInModal = () => setOpenLogInModal(false);
    
    
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
                    <LogInModal listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers} setLoggedInUserId={setLoggedInUserId}/>
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