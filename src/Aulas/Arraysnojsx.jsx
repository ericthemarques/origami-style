import React from 'react';
// nunca iremos criar um array assim, isso é apenas para aprendizado (produtos) no caso.
function arrayzada() {
    const produtos = [<li key="e1">PC</li>, <li key="e2">Smartphone</li>, <li key="e3">Ipad</li>]
    const filmes = ['Before', 'The', 'Sunrise']
    return (
        <>
            {filmes.map(filme => (
                <li key={filme}>{filme}</li>
            ))}
        </>
    )
}

export default arrayzada;

