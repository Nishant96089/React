import itemCSS from "../styles/item.module.css";

function Item({ listItem }) {
  const buyButton = (event) => {
    console.log(event); // Logging out Synthetic event in console.
    alert(`You bought ${listItem}`);
  };

  // Here event is an object created by React to handle any event listener.

  return (
    <>
      <li className={itemCSS.list}>
        {listItem}
        <button
          className={`${itemCSS.button} btn btn-danger`}
          onClick={(event) => buyButton(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default Item;
