import { useContext } from "react";
import { TodoItems } from "../store/TodoItems";

const WelcomeMessage = () => {
  const { tasks } = useContext(TodoItems);
  return tasks.length === 0 && <p>Enjoy Your Day</p>;
};

export default WelcomeMessage;
