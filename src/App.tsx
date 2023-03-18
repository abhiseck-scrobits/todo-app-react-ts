import { useState } from "react";
import SingleTodo from "./SingleTodo";
import { TodoInterface } from "./types";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState<TodoInterface[]>([]);

  const opt = [{ value: "1", label: "1" }];

  const onAdd = async () => {
    if (value.length < 3) {
      alert("Todo value must be 3 charter or more");
      return;
    }
    setList((p) => [
      ...p,
      { id: p.length + "A", isChecked: false, value: value },
    ]);
    setValue("");
  };

  const onDelete = (index: number) => {
    setList((p) => p.splice(index, 1));
  };

  const onChecked = (index: number) => {
    setList((p) => {
      const prev = [...p];
      prev[index] = { ...prev[index], isChecked: !prev[index].isChecked };
      return prev;
    });
  };

  return (
    <div className="App">
      <div className="Title">
        <h1>Todo App</h1>
        <div className="Link-List">
          <a href="https://reactjs.org">React</a>
          <div className="Dot"></div>
          <a href="https://www.typescriptlang.org">TS</a>
          <div className="Dot"></div>
          <a href="https://vitejs.dev">Vite</a>
          <div className="Dot"></div>
          <a href="https://axios-http.com">Axios</a>
        </div>
      </div>
      <div className="List">
        {list.map((e, index) => (
          <SingleTodo
            data={e}
            key={index}
            onDelete={() => onDelete(index)}
            onChecked={() => onChecked(index)}
          />
        ))}
      </div>
      <div className="Action">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button onClick={onAdd}>Add</button>
      </div>
    </div>
  );
}

export default App;
