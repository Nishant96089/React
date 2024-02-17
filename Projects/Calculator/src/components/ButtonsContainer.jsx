import styles from "../styles/ButtonsContainer.module.css";

const ButtonsContainer = ({ btnHandler }) => {
  const btnList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "=",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {btnList.map((item) => (
        <button className={styles.button} onClick={() => btnHandler(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
