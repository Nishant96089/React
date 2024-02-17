import styles from "../styles/Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

// using children instead of taking props as parameter and then props.children after destructuring.

export default Container;
