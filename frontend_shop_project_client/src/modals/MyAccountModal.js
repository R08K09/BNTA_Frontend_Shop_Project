import { Modal } from "@mui/base";
import { Box } from "@mui/material";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import DeactivateAccountModal from "./DeactivateAccountModal";

const MyAccountModal = ({loggedInCustomer, listOfCustomers, setListOfCustomers, setLoggedInUserId}) => {

    const [openMyAccountModal, setOpenMyAccountModal] = useState(false);
    const [openUpdateAccountModal, setOpenUpdateAccountModal] = useState(false);
    const [openDeactivateAccountModal, setOpenDeactivateAccountModal] = useState(false)

    const handleToggleMyAccountModal = () => setOpenMyAccountModal(!openMyAccountModal);
    const handleToggleUpdateAccountModal = () => setOpenUpdateAccountModal(!openUpdateAccountModal);
    const handleToggleDeactivateAccountModal = () => setOpenDeactivateAccountModal(!openDeactivateAccountModal);


    const handleLogOut = () => {
        handleToggleMyAccountModal();
        setLoggedInUserId(0);
    }

    const customerProductsList = loggedInCustomer.products.map((product) => {
        return <ul>
            <li>Vehicle Name: {product.name}</li>
            <li>Price: £{(product.price/100).toLocaleString()}.00</li>
            </ul>
    })


    return (
        <>
        <h2 id="welcome-message"> Welcome back, {loggedInCustomer.name}</h2>
        <button onClick={handleToggleMyAccountModal}>My Account</button>
        <Modal
            open={openMyAccountModal}
            onClose={handleToggleMyAccountModal}
            className="my-account-modal">
            
            <Box className="modal">
                <button className="x-button" onClick={handleToggleMyAccountModal}>X</button>
                <div className="my-account-details">
                    <h2>Account Details:</h2>
                    <p>Name: {loggedInCustomer.name}</p>
                    <p>Email: {loggedInCustomer.email}</p>
                    <p>Applied Discount Category: {loggedInCustomer.discountCategory}</p>
                    <h2>Completed Orders:</h2>
                    {customerProductsList}
                </div>

                <div className="my-account-buttons">
                    <button className="confirm-button" onClick={handleToggleUpdateAccountModal}>Update Account Details</button>
                    <Modal
                        open={openUpdateAccountModal}
                        onClose={handleToggleUpdateAccountModal}>
                        <Box className="modal">
                        <button className="x-button" onClick={handleToggleUpdateAccountModal}>X</button>
                            <SignUpForm setOpenSignUpModal={setOpenUpdateAccountModal} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers} loggedInCustomer={loggedInCustomer}/>
                        </Box>
                    </Modal>
                    <button className="confirm-button" onClick={handleLogOut}>Log Out</button>
                
                        <DeactivateAccountModal listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers} loggedInCustomer={loggedInCustomer} setLoggedInUserId={setLoggedInUserId} handleToggleMyAccountModal={handleToggleMyAccountModal} />
                </div> 
           </Box>
            </Modal>
        </>
    );
}
 
export default MyAccountModal;