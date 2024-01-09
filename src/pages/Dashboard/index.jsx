import { DefautTemplate } from "../../components/DefaultTemplate";

export const Dashboard = ({user , userLogout}) => {
    return (
   <DefautTemplate  userLogout={userLogout}>
     <main> 
      <div>
       <h1>{`Olá,${user?.name}`}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, assumenda! </p>
      </div>
      <div>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
     </main>
   </DefautTemplate>
   );
 };

  