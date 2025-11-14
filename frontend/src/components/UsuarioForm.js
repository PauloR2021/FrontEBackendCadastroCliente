import React from "react";

function UsuarioForm({ nome, email, idade, senha, setNome, setEmail, setIdade, setSenha, cadastrarUsuario }) {
    return (
        <form onSubmit={cadastrarUsuario} calssName="card p-4 shwadonw-sm">
            <div className="mb-3">
                <label>Nome</label>
                <input
                    type="text"
                    className="form-control"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Idade</label>
                <input
                    type="number"
                    className="form-control"
                    value={idade}
                    onChange={e => setIdade(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Senha</label>
                <input
                    type="password"
                    className="form-control"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Cadastrar Usuário</button>
        </form >
    );
}

export default UsuarioForm;