const Customer = ({customer, setLoggedInUserId, setOpenLogInModal}) => {

    const handleUserSelection = () => {
        // console.log(customer.id);
        setLoggedInUserId(customer.id);
        setOpenLogInModal(false);
    }

    return ( 
        <>
            <button onClick={handleUserSelection} className="customer-button">
                <p>{customer.name}</p>
                <p><i>{customer.discountCategory}</i></p>
                <p>{customer.email}</p>
            </button>
        </>
     );
}
 
export default Customer;