import { useState } from "react";

const SignUpForm = ({setOpenSignUpModal, setListOfCustomers, listOfCustomers, loggedInCustomer}) => {
    const [newCustomer, setNewCustomer] = useState({
        name: "",
        email: "",
        discountCategory: null,
        products:[]
    })

    const discountCategories = [
        {
            id: 0,
            category: "none",
            displayName: "Select a category",
            discountPercent: 0
        },
        {   
            id: 1,
            category: "STUDENT",
            displayName: "Student",
            discountPercent: 10
        },
        {
            id: 2,
            category: "SENIOR_CITIZEN",
            displayName: "Senior citizen",
            discountPercent: 20
        },
        {
            id: 3,
            category: "HEALTHCARE",
            displayName: "Healthcare",
            discountPercent: 20
        },
        {
            id: 4,
            category: "VETERAN",
            displayName: "Veteran",
            discountPercent: 20
        }
    ]

    const discountOptions = discountCategories.map( (discount) => {
        return (<option key={discount.id} value={discount.category}> {discount.displayName} </option>)
    })

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedCustomer = {...newCustomer};
        copiedCustomer[propertyName] = event.target.value;
        setNewCustomer(copiedCustomer);
    }

    const handleDiscountCategoryChange = (event) => {
        const categoryName = event.target.value;
        const selectedCategory = discountCategories.find(discount => {
            return discount.category === categoryName;
        });
        if(selectedCategory.category !== "none"){
            const copiedCustomer = {...newCustomer};
            copiedCustomer.discountCategory = selectedCategory.category;
            setNewCustomer(copiedCustomer);
        } else{
            const copiedCustomer = {...newCustomer};
            copiedCustomer.discountCategory = null;
            setNewCustomer(copiedCustomer);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        loggedInCustomer ? updateCustomer(newCustomer) : postCustomer(newCustomer);
        // POST request to create new customer
        // close modals
        setOpenSignUpModal(false);
    }


    const postCustomer = (newCustomer) => {
        fetch("http://localhost:8080/customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCustomer),
        })
        .then((response) => response.json())
        .then((response) => {
            setListOfCustomers([...listOfCustomers, response])
        })
    };

    
    console.log(listOfCustomers);

    const updateCustomer = (newCustomer) => {
        fetch(`http://localhost:8080/customers/${loggedInCustomer.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCustomer),
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
}


    return ( 
        <form onSubmit={handleFormSubmit} >
            <input 
                type="text"
                name="name"
                value={newCustomer.name}
                placeholder={loggedInCustomer ? "Update your name" : "Enter your name"}
                onChange={handleChange}
            />
            {loggedInCustomer ? 
            <p>Email: {loggedInCustomer.email}</p>
            
            :
            <input 
                type="email"
                name="email"
                value={newCustomer.email}
                placeholder="Enter email"
                onChange={handleChange}
            />}

            <select 
                onChange={handleDiscountCategoryChange}
                name="Discount Category"
                value={newCustomer.discountCategory}
            >
                {/* <option value="select-category"> Select a Category </option> */}
                {discountOptions}
            </select>

            <button type="submit">{loggedInCustomer ? "Update" : "Sign Up"}</button>
        </form>
     );
}
 
export default SignUpForm;