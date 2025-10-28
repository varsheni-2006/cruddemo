import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // CREATE or UPDATE
  const addItem = () => {
    if (item.trim() === "") return;

    if (editIndex !== null) {
      // UPDATE existing item
      const updatedList = [...list];
      updatedList[editIndex] = item;
      setList(updatedList);
      setEditIndex(null);
    } else {
      // CREATE new item
      setList([...list, item]);
    }
    setItem("");
  };

  // READ is automatic — displaying items below using map()

  // DELETE item
  const deleteItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  // EDIT item
  const editItem = (index) => {
    setItem(list[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>React CRUD Application</h2>

      <input
        type="text"
        placeholder="Enter item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>
            {value}{" "}
            <button onClick={() => editItem(index)}>Edit</button>{" "}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 