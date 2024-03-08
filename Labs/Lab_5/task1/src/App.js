import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import {useState} from "react";

function App() {
    const [contacts, setContacts] = useState([]);

    const addContacts = (contact) => {
        setContacts([...contacts, contact]);
    }

  return (
    <div className="App">
        <ContactForm addContacts={addContacts}></ContactForm>
        <ContactTable contacts={contacts}></ContactTable>
    </div>
  );
}

export default App;
