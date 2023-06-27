import Store from "./store/Store";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
