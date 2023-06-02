import { useState } from "react";

const SignUpForm = ({setOpenSignUpModal, setListOfCustomers, listOfCustomers, loggedInCustomer}) => {
    const [newCustomer, setNewCustomer] = useState(
        (loggedInCustomer ? { 
            name: "",
            email: loggedInCustomer.email,
            discountCategory: loggedInCustomer.discountCategory,
            products:loggedInCustomer.products
        } : 
        {
            name : "",
            email: "",
            discountCategory: null,
            products: []
        }))

    const [error, setError] = useState("");

    // const handleValidationNewUser = () => {
    //     let errorMessage = "";
    //     if (listOfCustomers.find((customer) => customer.email === newCustomer.email)) {
    //         errorMessage = "This email is already in use";
    //     } if (newCustomer.email === "" || newCustomer.name === "") {
    //         errorMessage = "Please complete all fields";
    //         
    //     } 
    //     setError(errorMessage);
    //     // return errorMessage;
    // }

    // const handleValidationUpdateUser = () => {
    //     let errorMessage = "";
    //     if (newCustomer.name === "") {
    //         errorMessage = "Please enter name";
    //     }
    //     setError(errorMessage);
    //     // return errorMessage;
    // }

    // const handleValidation = () => {
    //      {loggedInCustomer ? handleValidationUpdateUser() : handleValidationNewUser()}
    // }


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
        if(selectedCategory.category !== "none" ){
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
        let errorMessage = "";
        // check validation for updateUser
        if(loggedInCustomer) {
            if (newCustomer.name === "") {
                errorMessage = "Please enter name";
            }
        }
        // check validation for newUser
        else {
            if (listOfCustomers.find((customer) => customer.email === newCustomer.email)) {
                errorMessage = "This email is already in use";
            } if (newCustomer.email === "" || newCustomer.name === "") {
                errorMessage = "Please complete all fields";
            }  
        }
        // POST/PATCH if error message is not blank
        if (errorMessage === "") {
            loggedInCustomer ? updateCustomer(newCustomer) : postCustomer(newCustomer);
            setOpenSignUpModal(false);
        }else{
            setError(errorMessage);
        }
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
        <>
            <form className="sign-up-form" onSubmit={handleFormSubmit} >
                <h2 id="enter-your-details-heading">Please enter your updated details below:</h2>
                <div className="signup-update-form">
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


                  <p>{error}</p>  
                </div>  
            </form>
          
        </>
     );
}
 
export default SignUpForm;