import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastroUsuario from "./pages/CadastroUsuario";
import ListaUsuarios from "./pages/ListaUsuarios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Meu App Full Stack</Link>
          <div>
            <Link className="btn btn-outline-light me-2" to="/">Cadastro</Link>
            <Link className="btn btn-outline-light" to="/lista">Lista</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<CadastroUsuario />} />
        <Route path="/lista" element={<ListaUsuarios />} />
      </Routes>
    </Router>
  );
}
export default App;
