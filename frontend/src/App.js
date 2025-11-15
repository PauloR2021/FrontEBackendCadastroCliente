import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastroUsuario from "./pages/CadastroUsuario";
import ListaUsuarios from "./pages/ListaUsuarios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  // Aplica o tema no body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>

      {/* TOGGLE BUTTON */}
      <div className="toggle-container p-3 d-flex justify-content-end">
        <span>🌙</span>
        <div
          className={`toggle-switch ${darkMode ? "toggle-active" : ""}`}
          onClick={() => setDarkMode(!darkMode)}
        ></div>
        <span>☀️</span>
      </div>

      <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">Meu App Full Stack </Link>

          <div>
            <Link className={`btn me-2 ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`} to="/">Cadastro</Link>
            <Link className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`} to="/lista">Lista</Link>
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
