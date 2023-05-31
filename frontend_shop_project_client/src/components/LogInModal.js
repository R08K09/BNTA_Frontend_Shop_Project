import { Modal } from "@mui/base";
import { Box } from "@mui/material";
import { useState } from "react";
import Customer from "./Customer";
import SignUpForm from "./SignUpForm";

const LogInModal  = ({listOfCustomers, setListOfCustomers, setLoggedInUserId, loggedInUserId}) => {

    const [openLogInModal, setOpenLogInModal] = useState(false);
    const [openSignUpModal, setOpenSignUpModal] = useState(false);


    const handleToggleLogInModal = () => setOpenLogInModal(!openLogInModal);
    const handleToggleSignUpModal = () => setOpenSignUpModal(!openSignUpModal);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const customerComponents = listOfCustomers.map((customer) => <Customer customer={customer} setLoggedInUserId={setLoggedInUserId} setOpenLogInModal={setOpenLogInModal}/>)

    return ( 
        <>
        <button onClick={handleToggleLogInModal}>
            {loggedInUserId <=0 ? "Log In/Sign Up" : "Switch account"}
            </button>
            <Modal 
                open={openLogInModal}
                onClose={handleToggleLogInModal}
                className="log-in-modal">
                <Box sx={style}>
                    <h2>Select User or Sign Up</h2>
                    <button onClick={handleToggleLogInModal}>X</button>
                    {customerComponents}
                    <button onClick={handleToggleSignUpModal}>Sign Up</button>
                    <Modal
                        open={openSignUpModal}
                        onClose={handleToggleSignUpModal}
                        className="sign-up-modal"
                        >
                            <Box sx={style}>
                                <button onClick={handleToggleSignUpModal}>X</button>
                                <SignUpForm setOpenSignUpModal={setOpenSignUpModal} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers}/>
                            </Box>
                    </Modal>
                </Box>
            </Modal>
        </>
     );
}
 
export default LogInModal;