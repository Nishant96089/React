import Item from "./item";

function ListItem({ FullList }) {
  return (
    <ul className="list-group">
      {FullList.map((item) => (
        <Item key={item} listItem={item}></Item>
      ))}
    </ul>
  );
}

export default ListItem;
