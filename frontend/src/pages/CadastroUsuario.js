import React, { useState } from "react";
import axios from "axios";
import UsuarioForm from "../components/UsuarioForm";

function CadastroUsuario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [senha, setSenha] = useState("");

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

        } catch (error) {
            alert("Erro ao cadastrar usuário.");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Cadastro de Usuário</h2>
            <UsuarioForm
                nome={nome}
                email={email}
                idade={idade}
                senha={senha}
                setNome={setNome}
                setEmail={setEmail}
                setIdade={setIdade}
                setSenha={setSenha}
                cadastrarUsuario={cadastrarUsuario}
            />
        </div>
    );
};

export default CadastroUsuario;