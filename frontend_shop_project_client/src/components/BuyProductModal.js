import { Modal } from "@mui/base";
import { Box } from "@mui/system";
import { useState } from "react";

const BuyProductModal = ({vehicle, loggedInUserId}) => {

    const [openBuyProductModal, setOpenBuyProductModal] = useState(false);
    const handleToggleBuyProductModal = () => {setOpenBuyProductModal(!openBuyProductModal)};


    const buyProduct = (() => {
        fetch(`http://localhost:8080/customers/${loggedInUserId}?productId=${vehicle.id}`,{
            method: "PATCH",
            headers: { "Content-Type": "application/json"}
        })
        // .then((response) => response.json())
    })

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
    const displayPrice = (vehicle.price/100).toLocaleString();
    return ( 
        <>
        <button onClick={handleToggleBuyProductModal}>Buy</button>
        <Modal className = "buy-product-modal" open = {openBuyProductModal} onClose={handleToggleBuyProductModal}>
            <Box sx={style}>
                <button onClick={handleToggleBuyProductModal}>X</button>
                <h2>Please confirm your order:</h2>
                <p>name: {vehicle.name}</p>
                <p>£{displayPrice}.00</p>
                <button onClick={buyProduct}>Confirm Order</button>
            </Box>
        </Modal>
        
        </>
     );
}
 
export default BuyProductModal;