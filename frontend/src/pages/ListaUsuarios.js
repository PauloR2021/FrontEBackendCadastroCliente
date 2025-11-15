// src/pages/ListaUsuarios.js
import React, { useState, useEffect } from "react";
import axios from "axios";


function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [editando, setEditando] = useState(null);
    const [form, setForm] = useState({ nome: "", email: "", idade: "" });

    const api = "http://localhost:5000";

    //Carregar Usuarios
    const listarUsuarios = async () => {
        const res = await axios.get(`${api}/usuarios`);
        setUsuarios(res.data);
    };

    //Excluitr Usuario
    const excluirUsuario = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir?")) {
            await axios.delete(`${api}/usuarios/${id}`);
            listarUsuarios();
        }
    };

    //Editar - Carregar Dados no Forumlário
    const editar = (usuario) => {
        setEditando(usuario.id);
        setForm({ nome: usuario.nome, email: usuario.email, idade: usuario.idade });
    };

    //Atualizar Usuario
    const salvarEdicao = async (e) => {
        console.log("⚡ salvarEdicao foi chamado!");

        try {
            await axios.put(`${api}/usuarios/${editando}`, form);

            alert("Usuário atualizado com sucesso!");

            setEditando(null);
            setForm({ nome: "", email: "", idade: "" });
            listarUsuarios();
        } catch (err) {
            console.error("Erro ao atualizar usuário:", err);
            alert("Erro ao atualizar usuário.");
        }
    };

    useEffect(() => {
        listarUsuarios();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Lista de Usuários</h2>

            {/* Formulário de edição */}
            {editando && (
                <div className="card p-3 mb-4">
                    <h4>Editar Usuário</h4>

                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Nome"
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    />

                    <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <input
                        type="number"
                        className="form-control mb-2"
                        placeholder="Idade"
                        value={form.idade}
                        onChange={(e) => setForm({ ...form, idade: e.target.value })}
                    />

                    <button type="button" className="btn btn-success me-2" onClick={salvarEdicao}>
                        Salvar
                    </button><br></br>

                    <button className="btn btn-secondary" onClick={() => setEditando(null)}>
                        Cancelar
                    </button>
                </div>
            )}

            {/* Tabela */}
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                        <th style={{ width: "180px" }}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.nome}</td>
                            <td>{u.email}</td>
                            <td>{u.idade}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editar(u)}
                                >
                                    Editar
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => excluirUsuario(u.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}


export default ListaUsuarios;
