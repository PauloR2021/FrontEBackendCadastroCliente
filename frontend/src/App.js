import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const api = "http://localhost:5000";

  const cadastrarUsuario = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${api}/usuarios`, { nome, email, idade, senha });
      alert("Usuário cadastrado com sucesso!");
      setNome("");
      setEmail("");
      setIdade("");
      setSenha("");
      listarUsuarios();
    }
    catch (error) {
      alert("Erro ao cadastrar usuário.");
    }
  };

  const listarUsuarios = async () => {
    const res = await axios.get(`${api}/usuarios`);
    setUsuarios(res.data);
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Cadastro de Usuario</h2>
      <form onSubmit={cadastrarUsuario} className="card p-4 shwado-sm">
        <div className="mb-3">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label>Idade</label>
          <input
            type="number"
            className="form-control"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          >
          </input>
        </div>

        <button className="btn btn-primary w-100">Cadastrar Usuario</button>
      </form>

      <h3 className="mt-5">Usuários Cadastrados</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
}
export default App;
