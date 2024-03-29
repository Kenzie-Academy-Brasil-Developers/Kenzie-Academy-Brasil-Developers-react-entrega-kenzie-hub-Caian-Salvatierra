import { useContext } from "react";
import { DefautTemplate } from "../../components/DefaultTemplate";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {
  const {user} = useContext(UserContext);

  return (
    <div className={style.container}>
      <DefautTemplate >
        <main className={style.containerText}>
          <div className={style.user}>
            <div className={style.name}>
              <h1>{`Olá,${user?.name}`}</h1>
            </div>
            <div className={style.paragraph}>
              <p className="headline bold">
               {user?.course_module}
              </p>
            </div>
          </div>
          <div className={style.text}>
            <h2 className="title">Que pena! Estamos em desenvolvimento :(</h2>
            <p className="paragraph two">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </main>
      </DefautTemplate>
    </div>
  );
};
