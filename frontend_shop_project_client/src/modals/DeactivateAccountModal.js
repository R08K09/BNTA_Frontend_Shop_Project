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
            <button className="confirm-button" onClick={handleToggleDeactivateAccountModal}>Deactivate Account</button>
            <Modal className="deactivate-account-modal" open = {openDeactivateAccountModal} onClose = {handleToggleDeactivateAccountModal} >
                <Box className="modal">
                    <div className="display-deactivation-page">
                        <h2>Please confirm you want to deactivate your account</h2>
                        <p>Name: {loggedInCustomer.name}</p>
                        <p>Email: {loggedInCustomer.email}</p>
                        <p><i>Once deactivated, you cannot retrieve this account.</i></p>
                        
                        <button className="confirm-button" id="red-confirm-button" onClick={deactivateAccount}>Confirm</button>
                        <button className="confirm-button" onClick={handleToggleDeactivateAccountModal}>Cancel</button>
                    </div>
                </Box>
            </Modal>

        </div>
     );
}
 
export default DeactivateAccountModal;