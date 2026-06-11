let estados = [];

function adicionarEstado(){ // peguei este codigo de uma atividade antiga e adaptei
    const input = document.getElementById("estado");
    const estado = input.value.trim();

    estados.push(estado);

    atualizarLista();

    input.value = "";
    input.focus();
}

function atualizarLista() {

    const lista = document.getElementById("listaEstados");

    lista.innerHTML = "";

    estados.forEach(function(estado) { // peguei esta parte na IA pois não estava conseguindo lembrar como fazia
        const li = document.createElement("li");

        li.textContent = estado;

        lista.appendChild(li);
    });
}

function organizarEstados(){ // codigo baseado no w3 schools, professor alexanddre me auxiliou

    estados.sort((a,b)=>b.localeCompare(a));
    
   // console.log(estados);

    atualizarLista();

    document.getElementById("listaEstados").classList.add("estiloNovo");// peguei linha na Ia

}



function deletar() { // alexandre me deu minima ajuda da linha 50 a 56
    const input = document.getElementById("estado");
    const estadoBusca = input.value.trim();

    const encontrado = estados.find(estado => estado.toLowerCase() === estadoBusca.toLowerCase());

    if (encontrado) {
        const indice = estados.indexOf(encontrado);
        estados.splice(indice, 1); 
        atualizarLista();
    } else {
        alert(`O estado "${estadoBusca}" NÃO foi encontrado.`);// ${estadoBusca} w3 schools
    }
    input.value = "";
    input.focus();
}






function consultar() { // reutilizei este codigo de uma atividade do alexandre de 2025
    const input = document.getElementById("estado");
    const estadoBusca = input.value.trim();

    const encontrado = estados.find(estado => estado.toLowerCase() === estadoBusca.toLowerCase());

    if (encontrado) {
        alert(`O estado "${encontrado}" está cadastrado na lista!`);//peguei o ${encontrado} no w3 school
    } else {
        alert(`O estado "${estadoBusca}" NÃO foi encontrado.`);//peguei o ${encontrado} no w3 school
    }
    input.value = "";
    input.focus();
}

function alterar() { // reutilizei garnde parte porem da linha 92 a 102 peguei na Ia
    const input = document.getElementById("estado");
    const estadoBusca = input.value.trim();

   
    const encontrado = estados.find(estado => estado.toLowerCase() === estadoBusca.toLowerCase());

    if (encontrado) {
        const novoNome = prompt(`O estado "${encontrado}" foi encontrado. Digite o novo nome dele:`);// peguei no w3 school

      
        if (novoNome && novoNome.trim() !== " ") {
            const indice = estados.indexOf(encontrado);
            estados[indice] = novoNome.trim(); 
            atualizarLista();
            alert("Estado alterado com sucesso!");
        } else {
            alert("Alteração cancelada ou nenhum nome válido foi digitado.");
        }
    } else {
        alert(`O estado "${estadoBusca}" NÃO foi encontrado.`);// ${estadoBusca} peguei no w3 school
    }

    input.value = "";
    input.focus();
    organizarEstados();
}