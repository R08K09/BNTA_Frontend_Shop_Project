import { useEffect, useState } from 'react';
import './App.css';
import Footer from './containers/Footer';
import VehicleContainer from './containers/VehicleContainer';

function App() {

  const [listOfCustomers, setListOfCustomers] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(0);

  const fetchCustomers  = async () => {
    const response = await fetch("http://localhost:8080/customers");
    const data = await response.json();
    setListOfCustomers(data);
  }


  useEffect(() => {
      fetchCustomers();
  }, [])

  return (
    <div>
       <VehicleContainer 
       listOfCustomers={listOfCustomers} 
       setLoggedInUserId ={setLoggedInUserId} 
       setListOfCustomers={setListOfCustomers}
       loggedInUserId={loggedInUserId}/>
       <Footer/>
    </div>
  );
}

export default App;
