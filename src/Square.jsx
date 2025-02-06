import { useState } from "react";
<<<<<<< HEAD
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
=======

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Kazanan " + winner;
  } else {
    status = "Sıradaki Oyuncu: " + (xIsNext ? " GamerX" : " GamerO");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
>>>>>>> daa8087 (Tic Tac Toe Project)
