import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./component/Navbar";
import AllRoutes from "./AllRoutes";
import style from "./styles/Home.module.css";

function App() {
  let data = useSelector((store) => store);
  return (
    <div className={style.Apps}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
