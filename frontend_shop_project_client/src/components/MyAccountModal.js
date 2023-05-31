import { Modal } from "@mui/base";
import { Box } from "@mui/material";
import { useState } from "react";

const MyAccountModal = ({loggedInCustomer}) => {

    const [openMyAccountModal, setOpenMyAccountModal] = useState(false);
    const [openUpdateAccountModal, setOpenUpdateAccountModal] = useState(false);

    const handleToggleMyAccountModal = () => setOpenMyAccountModal(!openMyAccountModal);
    const handleToggleUpdateAccountModal = () => setOpenUpdateAccountModal(!openUpdateAccountModal);

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

    return (
        <>
        <h2>Welcome back {loggedInCustomer.name}</h2>
        <button onClick={handleToggleMyAccountModal}>My Account</button>
        <Modal
            open={openMyAccountModal}
            onClose={handleToggleMyAccountModal}
            className="my-account-modal">
            
            <Box sx={style}>
                <button onClick={handleToggleMyAccountModal}>X</button>
                <p>{loggedInCustomer.name}</p>
                <p>{loggedInCustomer.email}</p>
                <p>{loggedInCustomer.discountCategory}</p>
                <p>{loggedInCustomer.products}</p>

                <button onClick={handleToggleUpdateAccountModal}>Update Account Details</button>
                <Modal
                    open={openUpdateAccountModal}
                    onClose={handleToggleUpdateAccountModal}>
                    <Box sx={style}>
                        <p>hello</p>
                    </Box>
                </Modal>

            </Box>
        </Modal>
        </>
    );
}
 
export default MyAccountModal;