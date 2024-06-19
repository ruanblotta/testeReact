import React, { useState } from 'react';
import './App.css';

const initialData = [
  { id: 1, nome: "Ruan Blotta", endereco: "Av xpto, 10", numero: "00000000", cpf: "00000000000", email: "email@email.com", telefone: "1199999999" },
  { id: 2, nome: "Elvis Presley", endereco: "Av xpto, 10", numero: "00000000", cpf: "00000000000", email: "email@email.com", telefone: "1199999999" },
  { id: 3, nome: "Ariana Grande", endereco: "Av xpto, 10", numero: "00000000", cpf: "00000000000", email: "email@email.com", telefone: "1199999999" },
  { id: 4, nome: "Ayrton Senna", endereco: "Av xpto, 10", numero: "00000000", cpf: "00000000000", email: "email@email.com", telefone: "1199999999" }
];

function App() {

  const [cadastros, setCadastros] = useState(initialData);

  const handleDeleteClick = (id) => {
    setCadastros(cadastros.filter(cadastro => cadastro.id !== id));
  };

  return (
    <div>
      <h1>Lista de Cadastros</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro) => (
            <tr key={cadastro.id}>
              <td>{cadastro.id}</td>
              <td>{cadastro.nome}</td>
              <td>{cadastro.endereco}</td>
              <td>{cadastro.numero}</td>
              <td>{cadastro.cpf}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.telefone}</td>
              <td>
                <button onClick={() => handleDeleteClick(cadastro.id)} className="red">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App;

