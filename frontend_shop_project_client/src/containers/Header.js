
import LogInModal from "../components/LogInModal";
import MyAccountModal from "../components/MyAccountModal";

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
                    {/* logo here */}
                    <h1>CompanyNameHere</h1>
                </div>
                <div className="customer-tags">
                    <LogInModal listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers} setLoggedInUserId={setLoggedInUserId} loggedInUserId={loggedInUserId}/>
                    {loggedInUserId > 0 ? <MyAccountModal 
                        loggedInCustomer={loggedInCustomer} 
                        listOfCustomers={listOfCustomers} setListOfCustomers ={setListOfCustomers}/> : <> </>}
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