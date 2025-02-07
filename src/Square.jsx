import { useState } from "react";
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

function Square() {
  const [newTodo, setNewTodo] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (newTodo == "") {
      alert("Boş değer girilmez ");

      return <></>;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newTodo,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewTodo("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="todo-container">
      <h2>Todo List App</h2>

      <input
        type="text"
        placeholder="Ekle..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        maxLength={40}
      />
      <button className="button" onClick={() => addItem()}>
        Ekle
      </button>
      <ul>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <li className="container-pf">
                {item.value}{" "}
                <button
                  className="button-x"
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  X
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default Square;
