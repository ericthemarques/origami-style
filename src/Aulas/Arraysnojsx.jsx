import React from 'react';
// nunca iremos criar um array assim, isso é apenas para aprendizado (produtos) no caso.
// coisa horivel quando a pessoa bate o olho lol
function arrayzada() {
    const produtos = [<li key="e1">PC</li>, <li key="e2">Smartphone</li>, <li key="e3">Ipad</li>]
    const filmes = ['Before', 'The', 'Sunrise']
    const livros = [
        { nome: "game of thrones", ano: 1996},
        { nome: "Storm of swords", ano: 2000},
        { nome: "Clash royale hehe haha", ano: 2017},
    ]
    return (
        <>
        <ul>
            {livros.map(({nome, ano}) => (
                <li key={nome}>
                    {nome}, {ano}
                </li>
            ))}
        </ul>
        </>
    )
}

export default arrayzada;

