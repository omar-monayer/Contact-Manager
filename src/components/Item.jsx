const Item = ({ contact, index, deleteContact }) => {
  return (
    <li>
      {index + 1}. <strong>{contact.name}</strong> — {contact.email}

      <button
        onClick={() => deleteContact(index)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;