import Item from "./Item";

const List = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>

      {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <Item
              key={index}
              index={index}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;