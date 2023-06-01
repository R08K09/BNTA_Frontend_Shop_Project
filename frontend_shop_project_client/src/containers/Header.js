import LogInModal from "../modals/LogInModal";
import MyAccountModal from "../modals/MyAccountModal";



const Header = ({fetchVehicles, setVehicleSearch, listOfCustomers, setListOfCustomers, setLoggedInUserId, loggedInUserId}) => {

    
    // const handleOpenLogInModal = () => setOpenLogInModal(true);
    // const handleCloseLogInModal = () => setOpenLogInModal(false);
    
    
    const handleSearchInput = (e) => {
        setVehicleSearch(e.target.value);
    }

    const loggedInCustomer = listOfCustomers.find((customer) => customer.id === loggedInUserId)

    

    return ( 
        <header className="header">
            <div className="header-container">

                <div className="company-tags">
                    <img src="https://static.vecteezy.com/system/resources/previews/020/108/970/original/tfl-flat-accounting-logo-design-on-white-background-tfl-creative-initials-growth-graph-letter-logo-concept-tfl-business-finance-logo-design-vector.jpg" alt="tfl logo" width="150px"/>
                    <h1>Travel. Freedom. Luxury </h1>
                </div>
        
                <div className="customer-tags">
                    <LogInModal listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers} setLoggedInUserId={setLoggedInUserId} loggedInUserId={loggedInUserId}/>
                    {loggedInUserId > 0 ? <MyAccountModal 
                        loggedInCustomer={loggedInCustomer} 
                        listOfCustomers={listOfCustomers} setListOfCustomers ={setListOfCustomers} setLoggedInUserId={setLoggedInUserId}/> : <> </>}
                </div>
            </div>

                <nav className="nav-bar">
                    <a href="#carList">Cars</a>
                    <a href="#planeList">Planes</a>
                    <a href="#boatList">Boats</a>

                    <div className="header-search">
                        <input id="search-input-bar"
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