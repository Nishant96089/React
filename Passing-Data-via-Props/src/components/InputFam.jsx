import styles from "../styles/inputFam.module.css";

const InputFam = ({ faminputHandler }) => {
  return (
    <input
      type="text"
      placeholder="Enter name"
      onKeyDown={faminputHandler}
      className={styles.input}
    />
  );
};

export default InputFam;
