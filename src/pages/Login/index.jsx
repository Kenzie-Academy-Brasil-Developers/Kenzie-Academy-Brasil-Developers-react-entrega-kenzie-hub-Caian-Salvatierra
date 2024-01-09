import { LoginForm } from "../../components/forms/LoginForm";
import LogoKenzieHub from "../../assets/img/logoKenzieHub.png";


export const Login = ({setUser}) => {
    return (
      <main>
        <div>
          
          <img src={LogoKenzieHub} alt="LogoKenzieHub" />
        </div>
        <LoginForm setUser={setUser}/>
      </main>
    );
  };