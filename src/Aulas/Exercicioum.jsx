import React from "react";

function exercicioUm() {
    const luana = {
        cliente: 'Luana',
        idade: 27,
        compras: [
          { nome: 'Notebook', preco: 'R$ 2500' },
          { nome: 'Geladeira', preco: 'R$ 3000' },
          { nome: 'Smartphone', preco: 'R$ 1500' },
        ],
        ativa: true,
      };
    
      const mario = {
        cliente: 'Mario',
        idade: 31,
        compras: [
          { nome: 'Notebook', preco: 'R$ 2500' },
          { nome: 'Geladeira', preco: 'R$ 3000' },
          { nome: 'Smartphone', preco: 'R$ 1500' },
          { nome: 'Guitarra', preco: 'R$ 3500' },
        ],
        ativa: false,
      };
    
      const dados = mario;
      const total = dados.compras.map((i) => Number(i.preco.replace("R$ ", ""))).reduce((a, b) => a + b);
    
      return (
        <>
         <p>Nome = {dados.cliente}</p>
         <p>Idade = {dados.idade}</p>
         <p>Situação = <span style={{color: dados.ativa ? "green" : "red"}}>{dados.ativa ? "Ativo" : "Inativo"}</span></p>
         <p>Total = {total}</p>
         <p>{total > 10000 ? "Tu tá gastando muito bro" : ""}</p>
        </>
      )
}

export default exercicioUm;