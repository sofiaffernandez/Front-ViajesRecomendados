import { Link } from "react-router-dom";
//import de logo para el header
import logo from "./../../logoplanb.png"
//import icono 
import { AiOutlineLogout } from "react-icons/ai";
//import del cambio de tema
import  ThemeSwitcher   from "./../ThemeSwitcher/ThemeSwitcher";

import { useUser, useSetUser } from "../../context/UserContext";

//import css
import "./Header.css"

const Header = () => {
  const user = useUser();
  const setUser = useSetUser();

  return (
    <header className="principal">
        <nav>
            <ul>
                <li>
                    <Link to="/">
                    <img src={logo} alt ="logo pagina" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                    AboutUs
                    </Link>
                </li>
                { user ? (
                <section>
                  <Link to={`/usuario/${user.id}`}>{user.nombre}</Link>{" "}
                  <AiOutlineLogout  onClick={() => setUser()} />
                </section>
              ) : (
            <>
              <li>
                <Link to="/usuario/login">Accede</Link>
              </li>
              <li>
                <Link to="/usuario/crear">únete</Link>
              </li>
            </>
          )}

      <ThemeSwitcher />
      </ul>
      </nav>
    </header>
  );
};

export default Header;
