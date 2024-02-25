import AppName from "./Components/AppName";
import InputTask from "./Components/InputTask";
import DisplayContent from "./Components/DisplayContent";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import TodoItemsProvider from "./store/TodoItems";

function App() {
  return (
    <TodoItemsProvider>
      <center className="todo-container">
        <AppName />
        <InputTask />
        <WelcomeMessage />
        <DisplayContent />
      </center>
    </TodoItemsProvider>
  );
}

export default App;
