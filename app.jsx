/** @jsx cyanide */
import { cyanide, mount, setState, getState, createStore } from "cyanide";
import { Input } from "./components/imputComponent/Input";
import { Card } from "./components/cardComponent/Card";
import "./app.css";

const intialState = { tareas: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, tareas: [...state.tareas, action.payload] };
    case "REMOVE":
      return {
        ...state,
        tareas: state.tareas.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
}

const store = createStore(intialState, reducer);

const App = () => {
  const { tareas } = store.getState();
  function handleAdd() {
    const input = document.getElementById("input").value;
    store.dispatch({ type: "ADD", payload: { id: input, input: input } });
  }
  function handleRemove(id) {
    store.dispatch({ type: "REMOVE", payload: id });
  }

  return (
    <div>
      <div id="mainContainer">
        <Input
          placeholder="ingrese una nueva tarea"
          label="tarea: "
          handleAdd={handleAdd}
        />
        {tareas.map((tarea) => (
          <Card task={tarea.input} remove={() => handleRemove(tarea.id)} />
        ))}
      </div>
      <a href="https://www.youtube.com/watch?v=LucBQCD2Cp8">
      <p id="footer"> inspired by Decorating cents </p>
      </a>
    </div>
  );
};

mount(App, "#app");
