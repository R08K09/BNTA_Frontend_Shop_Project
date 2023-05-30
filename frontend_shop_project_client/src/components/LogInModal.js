import { Modal } from "@mui/base";
import { Box } from "@mui/material";
import { useState } from "react";
import Customer from "./Customer";
import SignUpForm from "./SignUpForm";

const LogInModal  = ({listOfCustomers, setListOfCustomers, setLoggedInUserId}) => {

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

    const customerComponents = listOfCustomers.map((customer) => <Customer customer={customer} setLoggedInUserId={setLoggedInUserId}/>)

    return ( 
        <>
        <button onClick={handleToggleLogInModal}>Log In/Sign Up</button>
                    <Modal 
                        open={openLogInModal}
                        onClose={handleToggleLogInModal}
                        // onClick={handleToggleLogInModal}
                        className="log-in-modal">
                        <Box sx={style}>
                            <h2>Select User or Sign Up</h2>
                            {customerComponents}
                            <button onClick={handleToggleSignUpModal}>Sign Up</button>
                            <Modal
                            open={openSignUpModal}
                            onClose={handleToggleSignUpModal}
                            // onClick={handleToggleSignUpModal}
                            className="sign-up-modal"
                            >
                                <Box sx={style}>
                                    <SignUpForm setLoggedInUserId={setLoggedInUserId} listOfCustomers={listOfCustomers} setListOfCustomers={setListOfCustomers}/>
                                </Box>
                            </Modal>
                        </Box>
                    </Modal>
        </>
     );
}
 
export default LogInModal;