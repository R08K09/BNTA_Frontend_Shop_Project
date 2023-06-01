import { Modal } from "@mui/base";
import { Box } from "@mui/material";
import { useState } from "react";
import Customer from "../components/Customer";
import SignUpForm from "../components/SignUpForm";

const LogInModal  = ({listOfCustomers, setListOfCustomers, setLoggedInUserId, loggedInUserId}) => {

    const [openLogInModal, setOpenLogInModal] = useState(false);
    const [openSignUpModal, setOpenSignUpModal] = useState(false);


    const handleToggleLogInModal = () => setOpenLogInModal(!openLogInModal);
    const handleToggleSignUpModal = () => setOpenSignUpModal(!openSignUpModal);

    const filteredListOfCustomers = listOfCustomers.filter((customer) => !customer.deactivated)

    const customerComponents = filteredListOfCustomers.map((customer) => <Customer className = "customer" customer={customer} setLoggedInUserId={setLoggedInUserId} setOpenLogInModal={setOpenLogInModal}/>)


    return ( 
        <>
        <button onClick={handleToggleLogInModal}>
            {loggedInUserId <=0 ? "Log In/Sign Up" : "Switch account"}
            </button>
            <Modal 
                open={openLogInModal}
                onClose={handleToggleLogInModal}
                className="log-in-modal">
                <Box className="modal">
                    <h2>Select User or Sign Up</h2>
                    <button className="x-button" onClick={handleToggleLogInModal}>X</button>
                    {customerComponents}
                    <button onClick={handleToggleSignUpModal}>Sign Up</button>
                    <Modal
                        open={openSignUpModal}
                        onClose={handleToggleSignUpModal}
                        className="sign-up-modal"
                        >
                            <Box className="modal">
                                <button className="x-button" onClick={handleToggleSignUpModal}>X</button>
                                <SignUpForm setOpenSignUpModal={setOpenSignUpModal} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers}/>
                            </Box>
                    </Modal>
                </Box>
            </Modal>
        </>
     );
}
 
export default LogInModal;