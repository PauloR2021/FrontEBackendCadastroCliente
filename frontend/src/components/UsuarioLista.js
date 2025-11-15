import React from "react";

function UsuarioLista({ usuarios }) {
    return (
        <div className="card p-4 shadow-sm mt-4">
            <h5 className="mb-3">Uusários Cadastrados</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.nome}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.idade}</td>
                        </tr>
                    ))}

                </tbody>

            </table>
        </div>

    );
}

export default UsuarioLista;