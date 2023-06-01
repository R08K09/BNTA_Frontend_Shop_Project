import { Modal } from "@mui/base";
import { Box } from "@mui/material";
import { useState } from "react";
import SignUpForm from "./SignUpForm";
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
            <li>{product.name}</li>
            <li>{product.price}</li>
            </ul>
    })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'green',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
        <h2>Welcome back, {loggedInCustomer.name}</h2>
        <button onClick={handleToggleMyAccountModal}>My Account</button>
        <Modal
            open={openMyAccountModal}
            onClose={handleToggleMyAccountModal}
            className="my-account-modal">
            
            <Box sx={style}>
                <button onClick={handleToggleMyAccountModal}>X</button>
                <h2>Account Details:</h2>
                <p>Name: {loggedInCustomer.name}</p>
                <p>Email: {loggedInCustomer.email}</p>
                <p>Valid Discount: {loggedInCustomer.discountCategory}</p>
                <h2>Completed Orders:</h2>
                {customerProductsList}

                <button onClick={handleToggleUpdateAccountModal}>Update Account Details</button>
                <Modal
                    open={openUpdateAccountModal}
                    onClose={handleToggleUpdateAccountModal}>
                    <Box sx={style}>
                        <SignUpForm setOpenSignUpModal={setOpenUpdateAccountModal} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers} loggedInCustomer={loggedInCustomer}/>
                    </Box>
                </Modal>
                <button onClick={handleLogOut}>Log Out</button>
                    <DeactivateAccountModal listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers} loggedInCustomer={loggedInCustomer} setLoggedInUserId={setLoggedInUserId} handleToggleMyAccountModal={handleToggleMyAccountModal} />
            </Box>
            </Modal>
        </>
    );
}
 
export default MyAccountModal;