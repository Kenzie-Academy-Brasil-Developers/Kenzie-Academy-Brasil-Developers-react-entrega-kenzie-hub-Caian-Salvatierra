import  LogoKenzieHub    from "../../assets/img/logoKenzieHub.png";

export const Header = ({userLogout}) =>{
    return(
        <div>
            <img src={LogoKenzieHub} alt="Logo KenzieHub" />
            <button onClick={userLogout}>Sair</button>
        </div>
    )
};