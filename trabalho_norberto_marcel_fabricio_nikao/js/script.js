let estados = [];


function adicionarEstado(){ // peguei este codigo de uma atividade antiga e adaptei
    const input = document.getElementById("estado");
    const estado = input.value.trim();

    
    if (estado === "") {
        alert("Digite o nome de um estado.");
        return;
    }


    const novoEstado = {
        id: estados.length + 1,
        nome: estado
    };

    estados.push(novoEstado);

    atualizarLista();

    input.value = "";
    input.focus();

}


function atualizarLista() {

    const lista = document.getElementById("listaEstados");

    lista.innerHTML = "";

    estados.forEach(function(estado) { 
        const li = document.createElement("li"); 

        li.textContent = estado.id + " - " + estado.nome.charAt(0).toUpperCase() + estado.nome.slice(1).toLowerCase();

        lista.appendChild(li); 
    });
}


function organizarEstados(){ // codigo baseado no w3 schools, professor alexanddre me auxiliou

    estados.sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });


    estados.reverse();

    estados.forEach(function(estado, index) {
        estado.id = index + 1;
    });

    atualizarLista();

    document.getElementById("listaEstados").classList.add("estiloNovo");

    for (const estado of estados) {
        console.log(estado.nome.charAt(0).toUpperCase() + estado.nome.slice(1).toLowerCase());
    }

}



function deletar() { // alexandre me deu minima ajuda da linha 50 a 56
    const input = document.getElementById("estado");
    const estadoBusca = input.value.trim();

    const indice = estados.findIndex(function(estado) {
        return estado.nome.toLowerCase() === estadoBusca.toLowerCase();
    });

    if (indice !== -1) {

        estados.splice(indice, 1);

       
        estados.forEach(function(estado, index) {
            estado.id = index + 1;
        });

        atualizarLista();

        alert("Estado excluído com sucesso!");

    } else {
        alert(`O estado "${estadoBusca}" NÃO foi encontrado.`);
    }

    input.value = "";
    input.focus();
}



function consultar() { // reutilizei este codigo de uma atividade do alexandre de 2025
    const input = document.getElementById("estado");
    const estadoBusca = input.value.trim();

    const encontrado = estados.find(function(estado) {
        return estado.nome.toLowerCase() === estadoBusca.toLowerCase();
    });

    if (encontrado) {
        alert(`O estado "${encontrado.nome}" está cadastrado na lista!`);
    } else {
        alert(`O estado "${estadoBusca}" NÃO foi encontrado.`);
    }

    input.value = "";
    input.focus();

}


function alterar() { // reutilizei grande parte porem da linha 92 a 102 peguei na IA
    const input = document.getElementById("estado");
    const estadoBusca = input.value.trim();

    const encontrado = estados.find(function(estado) {
        return estado.nome.toLowerCase() === estadoBusca.toLowerCase();
    });
    
    if (encontrado) {
        const novoNome = prompt(`O estado "${encontrado.nome}" foi encontrado. Digite o novo nome dele:`);

      
        if (novoNome && novoNome.trim() !== "") {
            const indice = estados.indexOf(encontrado);

            estados[indice].nome = novoNome.trim();

            atualizarLista();

            alert("Estado alterado com sucesso!");
        } else {
            alert("Alteração cancelada ou nenhum nome válido foi digitado.");
        }
    } else {
        alert(`O estado "${estadoBusca}" NÃO foi encontrado.`);
    }

    input.value = "";
    input.focus();

    organizarEstados();
}