import './App.css';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';

function App() {

  const [contactList, setContactList] = useState([]);
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  });

  const addContact = () => {
    const contact = {
      id: contactList.length === 0 ? 1 : contactList[contactList.length - 1].id + 1,
      firstName: newContact.firstName,
      lastName: newContact.lastName,
      phoneNumber: newContact.phoneNumber
    }
    setContactList([...contactList, contact]);
  }



  return (
    <div className="App">
      <Header />
      <ContactForm newContact={newContact} setNewContact={setNewContact} addContact={addContact} />
      <ContactTable contactList={contactList} />
    </div>
  );
}

export default App;

