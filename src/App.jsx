import { useState } from 'react'

import List from './components/List'
import Form from './components/Form';


function App() {
  const [contacts, setContacts] = useState([]);
   const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
}
 const deleteContact = (indexToDelete) => {
    setContacts(contacts.filter((_, index) => index !== indexToDelete));
  };


  return (
    <div>
    <h1>Contacts Manager</h1>
    <Form addcontact={addContact}/>
    <List contacts={contacts} deleteContact={deleteContact} />
    </div>
  )
}

export default App
