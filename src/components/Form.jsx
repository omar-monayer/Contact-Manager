import { useState } from "react";

const Form = ({ addcontact }) => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name, email
        };
        
        addcontact(newContact);
        // console.log(people);

        // Clear form
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

            
                    
                    style={{ marginLeft: "10px" }}
                />
                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>
        </div>
  )
}
export default Form