import React, { useState } from 'react';

const Cadastro = ({ adicionarItem }) => {
  const [formData, setFormData] = useState({ nome: '', descricao: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.descricao) {
      adicionarItem(formData);
      setSubmitted(true);
      setFormData({ nome: '', descricao: '' });
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Descrição:
          <input type="text" name="descricao" value={formData.descricao} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      {submitted && <p>Cadastro bem-sucedido!</p>}
    </div>
  );
};

export default Cadastro;
