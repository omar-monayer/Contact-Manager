import { useState } from "react";
import "./css/Form.css";

const Form = ({ addcontact }) => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name, email
        };
        
        addcontact(newContact);
     

      
        setName("");
        setEmail("");

    }


  return (
        <div>
                 <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

            
                    
                    
                />
                <button type="submit">
                    Add Person
                </button>
            </form>
        </div>
  )
}
export default Form