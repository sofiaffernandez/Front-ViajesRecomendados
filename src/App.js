//Identificar las rutas internas
import { Route, Routes } from "react-router-dom";
//Para comunicarnos con el usuario, errores y procesos
import { ToastContainer } from "react-toastify";
//CSS del Toast
import "react-toastify/dist/ReactToastify.css";
//CSS Global
import './App.css';
//Import de las diferentes paginas
import Login from './pages/LoginPage/LoginPage';
import Registro from "./pages/RegisterPage/RegisterPage";
import About from "./pages/AboutPage/AboutPage"
import Home from "./pages/HomePage/HomePage"
import NotFoundPage  from "./pages/NotFoundPage/NotFoundPage";

//import componentes
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Import para día o noche
import {ThemeProvider} from "./context/ThemeContext";


function App() {
  return (
    <div className="App">
    <ThemeProvider >
    <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/usuario/login" element={<Login />} />
        <Route path="/usuario/crear" element={<Registro />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </main>
      <Footer />
      <ToastContainer position="bottom-center" pauseOnHover theme="dark" />
  </ThemeProvider>
    </div>
  );
}

export default App;
