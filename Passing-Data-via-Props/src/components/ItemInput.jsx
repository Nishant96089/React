import styles from "../styles/ItemInput.module.css";

const ItemInput = () => {
  const inputHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter item here"
      className={styles.input}
      onChange={inputHandler}
      // instead of adding a function with event as parameter you can just call the inputHandle function directly.
    />
  );
};

export default ItemInput;
