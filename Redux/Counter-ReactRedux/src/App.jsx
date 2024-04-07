import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom shadow-lg p-3 mb-5 bg-white rounded container">
      <Header></Header>
      <div className="col-lg-6 mx-auto">
        <DisplayCounter></DisplayCounter>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Controls></Controls>
        </div>
      </div>
    </div>
  );
}

export default App;
