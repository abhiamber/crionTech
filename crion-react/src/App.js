import { useSelector } from "react-redux";
import "./App.css";

function App() {
  let data = useSelector((store) => store);
  console.log(data);
  return (
    <div className="App">
      <h1>Crion-Technology</h1>
    </div>
  );
}

export default App;
