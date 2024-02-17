import styles from "../styles/Display.module.css";

const Display = ({ displayData }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayData}
      readOnly
    />
  );
};

export default Display;
