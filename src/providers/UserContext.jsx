import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const USerProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
   const getUser = async () => {
    try {
      const {data} = await api.get("/profile" ,{
        headers: {Authorization: `Bearer ${token}`}
      })

      setUser(data)
      navigate("/dashboard")
    } catch (error) {
      console.log(error);
    }
   }

   getUser()
  }, []);

  const userLogin = async (payload) => {

    try {
      const { data } = await api.post("/sessions", payload);
      
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);

      navigate("/dashboard");
      setUser(data.user);
      toast.success("Login realizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Credencias invalidas");
    }
  };


  const userLogout = () => {
    setUser(null);
    navigate("/");

    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

    toast.warn("Deslogado...")
  };


  const userRegister = async (payload) => {
    try {
      const { data } = await api.post("/users", payload);
      navigate("/");
      console.log(data);
      alert("Cadastro realizado");
    } catch (error) {
      console.log(error);
    }
  };

  return <UserContext.Provider value={{user, userLogout, userLogin, userRegister}}>{children}</UserContext.Provider>;
};
