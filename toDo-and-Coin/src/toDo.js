import { useState } from "react";

function ToDoApp() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] =useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
    console.log(toDos);
  }
  return (
    <div>
      <h2>My To-Dos ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input 
          value = {toDo}
          onChange={onChange}
          type="text"
          placeholder="Write yout to do.." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
