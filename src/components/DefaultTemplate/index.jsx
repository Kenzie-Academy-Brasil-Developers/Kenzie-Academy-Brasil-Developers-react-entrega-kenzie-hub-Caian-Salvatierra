import { Header } from "../Header";

export const DefautTemplate = ({user , userLogout,children}) => {
    return (
        <>
        <Header user={user} userLogout={userLogout}/>
        {children}
        
        </>
    );
};