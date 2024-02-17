import "./App.css";

function App() {
  let list = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  // Conditional Rendering.

  // let list = [];
  let emptyMessage = list.length === 0 ? <h3>The list is empty!</h3> : null;

  return (
    // Map Method
    <>
      <h1>Unordered List</h1>
      {emptyMessage}
      <ul className="list-group">
        {list.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
