document.getElementById("botao")
    .onclick = () => {
        let texto = document.getElementsByTagName("input")[0].value;
        let lista = document.getElementById("lista");
        let li = document.createElement("li");
        let novoTexto = document.createTextNode(texto);
        li.appendChild(novoTexto);
        lista.appendChild(li);

        let botaoRemover = document.createElement("input");
        botaoRemover.setAttribute("type", "button");
        botaoRemover.setAttribute("value", "remover");
        botaoRemover.onclick = remover;
        li.appendChild(botaoRemover);

        let botaoTrocar = document.createElement("input");
        botaoTrocar.setAttribute("type", "button");
        botaoTrocar.setAttribute("value", "trocar");
        botaoTrocar.onclick = trocar;
        li.appendChild(botaoTrocar);
    }

let remover = function() {
    let pai = this.parentNode;
    pai.parentNode.removeChild(pai);
}

let trocar = function() {
    let texto2 = document.getElementsByTagName("input")[2].value;
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    let novoTexto = document.createTextNode(texto2);
    lista.appendChild(li);
    li.appendChild(novoTexto);
    let pai = this.parentNode;
    pai.parentNode.replaceChild(li, pai);


    let botaoRemover = document.createElement("input");
    botaoRemover.setAttribute("type", "button");
    botaoRemover.setAttribute("value", "remover");
    botaoRemover.onclick = remover;
    li.appendChild(botaoRemover);



}