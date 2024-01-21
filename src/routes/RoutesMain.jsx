import { Route, Routes} from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivatesRoutes } from "./PrivatesRoutes";


export const RoutesMain = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      <Route element = {<PrivatesRoutes/>}> 
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
