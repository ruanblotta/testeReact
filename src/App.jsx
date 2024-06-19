import React, { useState } from 'react';
import './App.css';

const initialData = [
  { id: 1, nome: "Ruan Blotta", endereco: "Av xpto, 10", numero: "00000000", cpf: "00000000000", email: "email@email.com", telefone: "1199999999" },
  { id: 2, nome: "Elvis Presley", endereco: "Rua xpto, 10", numero: "00000000", cpf: "00000000000", email: "email@email.com", telefone: "1199999999" },
  { id: 3, nome: "Ariana Grande", endereco: "Estrada xpto, 10", numero: "00000000", cpf: "00000000000", email: "email@email.com", telefone: "1199999999" },
  { id: 4, nome: "Ayrton Senna", endereco: "Av xpto, 10", numero: "00000000", cpf: "00000000000", email: "email@email.com", telefone: "1199999999" }
];

function App() {
  const [cadastros, setCadastros] = useState(initialData);
  const [editingCadastro, setEditingCadastro] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  // Deletar
  const handleDeleteClick = (id) => {
    setCadastros(cadastros.filter(cadastro => cadastro.id !== id));
  };

  //Edit
  const handleEditClick = (cadastro) => {
    setEditingCadastro({ id: cadastro.length +1, nome: '', endereco: '', numero: '', cpf: '', email: '', telefone: ''});
    setIsAdding(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingCadastro({ ...editingCadastro, [name]: value});
  };

  const handleSave = () => {
    if (isAdding) {
      setCadastros([...cadastros, editingCadastro]);
    } else {
      setCadastros(cadastros.map(cadastro => 
        cadastro.id === editingCadastro.id ? editingCadastro : cadastro
      ));
    }
    setEditingCadastro(null);
    setIsAdding(false);
  }

  const handleCancel = () => {
    setEditingCadastro(null);
    setIsAdding(false);
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
                <button onClick={() => handleEditClick(cadastro)} className="green">Editar</button>
                <button onClick={() => handleDeleteClick(cadastro.id)} className="red">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {(editingCadastro || isAdding) && (
        <div className="edit-form">
          <h2>{isAdding ? 'Adicionar Cadastro' : 'Editar Cadastro'}</h2>
          <form action={(e) => { e.preventDefault(); handleSave(); }}>
            <input 
            name="nome"
            placeholder="Nome"
            value={editingCadastro.nome}
            onChange={handleInputChange}
            />
            <input 
            name="endereço"
            placeholder='Endereço'
            value={editingCadastro.endereco}
            onChange={handleInputChange} 
            />
            <input 
            type="numero"
            placeholder='Número' 
            value={editingCadastro.numero}
            onChange={handleInputChange}
            />
            <input 
            type="cpf"
            placeholder='CPF'
            value={editingCadastro.cpf}
            onChange={handleInputChange}
            />
            <input 
            type="email" 
            placeholder='Email'
            value={editingCadastro.email}
            onChange={handleInputChange}
            />
            <input 
            type="telefone" 
            placeholder="Telefone"
            value={editingCadastro.telefone}
            onChange={handleInputChange}
            />
            <button type="submit" className="green">Salvar</button>
            <button type="button" onClick={handleCancel} className="red">Cadastro</button>
          </form>

        </div>
      )}
    </div>
  )
}
export default App;

