let btn = document.getElementById('btn');
let table = document.getElementById('resultado');

let receitas = [];

function cadastrar() {
    let receita = {
        nome: document.getElementById('nome').value,
        ingredientes: document.getElementById('ingredientes').value,
        modoPreparo: document.getElementById('modo-preparo').value
    };

    receitas.push(receita);

    console.log(receitas);

    imprimir();
}

function imprimir() {
    table.innerHTML ='';
    for (let i = 0; i < receitas.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${receitas[i].nome}</td>
            <td>${receitas[i].ingredientes}</td>
            <td>${receitas[i].modoPreparo}</td>
        </tr>
        `;
    }
}

btn.addEventListener('click', cadastrar);
