const Customer = ({customer, setLoggedInUserId, setOpenLogInModal}) => {

    const handleUserSelection = () => {
        // console.log(customer.id);
        setLoggedInUserId(customer.id);
        setOpenLogInModal(false);
    }

    return ( 
        <>
            <button onClick={handleUserSelection}>
                <p>{customer.name}</p>
                <p>{customer.discountCategory}</p>
                <p>{customer.email}</p>
            </button>
        </>
     );
}
 
export default Customer;