import { Modal } from "@mui/base";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const BuyProductModal = ({vehicle, loggedInUserId, listOfCustomers, setListOfCustomers}) => {

    const [openBuyProductModal, setOpenBuyProductModal] = useState(false);
    const handleToggleBuyProductModal = () => {setOpenBuyProductModal(!openBuyProductModal)};


    const buyProduct = (() => {
        fetch(`http://localhost:8080/customers/${loggedInUserId}?productId=${vehicle.id}`,{
            method: "PATCH",
            headers: { "Content-Type": "application/json"}
        })
        .then((response) => response.json())
        .then((responseCustomer) =>{
            const updatedCustomerList = listOfCustomers.map((customer) => {
                if(customer.id === responseCustomer.id){
                    return responseCustomer;
                }else{
                    return customer
                }
        })
        setListOfCustomers(updatedCustomerList);
    })
        vehicle.sold = true;
        handleToggleBuyProductModal();
    })

   
    const displayPrice = (vehicle.price/100).toLocaleString();
    return ( 
        <>
        <button onClick={handleToggleBuyProductModal}>Buy</button>
        <Modal className = "buy-product-modal" open = {openBuyProductModal} onClose={handleToggleBuyProductModal}>
            <Box className="modal">
                <div className="confirm-order-details">
                    <h2>Please confirm your order:</h2>
                    <p>Name: {vehicle.name}</p>
                    <p>Price: £{displayPrice}.00</p>
                    <button className="confirm-button" onClick={buyProduct}>Confirm Order</button>
                    <button className="confirm-button"onClick={handleToggleBuyProductModal} >Cancel Order</button>
                </div>
            </Box>
        </Modal>
        
        </>
     );
}
 
export default BuyProductModal;