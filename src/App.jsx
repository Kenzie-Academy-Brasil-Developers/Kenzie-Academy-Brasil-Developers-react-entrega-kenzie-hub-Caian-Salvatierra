import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import "./style/index.scss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
