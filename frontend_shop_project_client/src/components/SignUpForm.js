import { useState } from "react";

const SignUpForm = ({setLoggedInUserId, setListOfCustomers, listOfCustomers}) => {
    const [newCustomer, setNewCustomer] = useState({
        name: "",
        email: "",
        discountCategory: "",
        products:[]
    })

    const discountCategories = [
        {
            category: "STUDENT",
            discountPercent: 10
        },
        {
            category: "SENIOR_CITIZEN",
            discountPercent: 20
        },
        {
            category: "HEALTHCARE",
            discountPercent: 20
        },
        {
            category: "VETERAN",
            discountPercent: 20
        }
    ]

    const discountOptions = discountCategories.map( (discount) => {
        return (<option value={discount}> {discount.category} </option>)
    })

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedCustomer = {...newCustomer};
        copiedCustomer[propertyName] = event.target.value;
        setNewCustomer(copiedCustomer);
    }

    const handleDiscountCategoryChange = (event) => {
        const categoryName = event.target.value;
        const selectedCategory = discountCategories.find(category => {
            return category.name === categoryName;
        });
        const copiedCustomer = {...newCustomer};
        copiedCustomer.discountCategory = selectedCategory;
        setNewCustomer(copiedCustomer);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // PUT request to create new customer
        postCustomer(newCustomer);
        // select this new customer as the one that's signed in
        setLoggedInUserId(newCustomer.id);
        // close modals
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


    return ( 
        <form onSubmit={handleFormSubmit} >
            <input 
                type="text"
                name="name"
                value={newCustomer.name}
                placeholder="enter name"
                onChange={handleChange}
            />

            <input 
                type="email"
                name="email"
                value={newCustomer.email}
                placeholder="emter email"
                onChange={handleChange}
            />

            <select 
                onChange={handleDiscountCategoryChange}
                name="Discount Category"
                value={newCustomer.discountCategory}
            >
                <option value="select-category"> Select a Category </option>
                {discountOptions}
            </select>

            <button type="submit">Sign Up</button>
        </form>
     );
}
 
export default SignUpForm;