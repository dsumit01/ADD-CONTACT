import React, {useState, useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {uuid} form 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const{contacts,setContacts} =useState([]);

  const addContactHandler= (contact )=> {
    console.log(contact);
    setContacts([...contacts,{id:uuid(), ...contact}]);
  };

  const updateContactHandler =()=> {};

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=> {
    const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
    },[]);
    

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    },[contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header/>
        <Switch>
        <Route path ="/" 
        exact 
        render = {(props)=> (<ContactList {...props} contacts = {contacts} getContactId = {removeContactHandler}/>)}
           />
        <Route path ="/add" 
        exact 
        render = {(props) => (<AddContact {...props} addContactHandler= {addContactHandler}/>)}
        />

<Route path ="/edit" 
        exact 
        render = {(props) => (
        <EditContact {...props} updateContactHandler= {updateContactHandler}/>)}
        />

        <Route path='/contact/:id' Component={}/>
        </Switch>
          <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> */}
      </Router>
     </div>
  );
}

export default App;
