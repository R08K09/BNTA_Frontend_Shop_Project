import { Box, Modal } from "@mui/material";
import { useState } from "react";

const DeactivateAccountModal = ({listOfCustomers, setListOfCustomers, loggedInCustomer, handleToggleMyAccountModal, setLoggedInUserId}) => {

    const [openDeactivateAccountModal, setOpenDeactivateAccountModal] = useState(false);
    const handleToggleDeactivateAccountModal = () => {setOpenDeactivateAccountModal(!openDeactivateAccountModal)};

    const deactivateAccount = (() => {
        loggedInCustomer.deactivated = true;
        handleToggleDeactivateAccountModal();
        handleToggleMyAccountModal();
        setLoggedInUserId(0);
    })


    return ( 
        <div>
            <button onClick={handleToggleDeactivateAccountModal}>Deactivate Account</button>
            <Modal className="deactivate-account-modal" open = {openDeactivateAccountModal} onClose = {handleToggleDeactivateAccountModal} >
                <Box className="modal">
                    <h2>Please confirm you want to deactivate your account</h2>
                    <p>{loggedInCustomer.name}</p>
                    <p>{loggedInCustomer.email}</p>
                    
                    <button onClick={deactivateAccount}>Confirm</button>
                    <button onClick={handleToggleDeactivateAccountModal}>Cancel</button>
                </Box>
            </Modal>

        </div>
     );
}
 
export default DeactivateAccountModal;