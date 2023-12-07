import React from 'react';

const ListaItens = ({ itens }) => {
  return (
    <div>
      <h2>Lista de Itens</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            <strong>Nome:</strong> {item.nome}, <strong>Descrição:</strong> {item.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaItens;
