import { useState } from "react";
import ToDoApp from './toDo'
import CoinApp from './coin'

function App() {
  const [menu, setMenu] = useState(null);
  const onClick = (event) => {
    setMenu(event.target.value);
  };
  return (
    <div>
      <h1>List of components</h1>
      <ol>
        <li onClick={onClick} value={0}>To-Do</li>
        <li onClick={onClick} value={1}>Coin-tracker</li>
      </ol>
      <hr />
      {menu === 0 ? <ToDoApp /> : null}
      {menu === 1 ? <CoinApp /> : null}
    </div>
  );
}

export default App;
