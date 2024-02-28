import React, { useState } from 'react';

function Saudacao() {
  // ultilizando o useState para alterar o estado do input
  const [nome, setNome] = useState('');

  return (
    <div>
      {/* Criando um input para armazenar o nome, e mostra - lo junto a saudação */}
      <label>Digite seu nome: </label>

      <input 
      type="text"
      value={nome}

      /*O evento onChange é acionado quando o valor do input for alterado pelo hook, o (e) é de evento*/
      onChange={(e) => setNome(e.target.value)} 
      />
      {/* Mensagem de saudação */}
      {nome && <p>Olá, querida {nome}, seja bem vinda ao meu componente funcional!!</p>}
    </div>
  );
}
 export default Saudacao