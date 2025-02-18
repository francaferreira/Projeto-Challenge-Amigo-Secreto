// Array para armazenar nomes de amigos
let amigos =[];


// Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

// Validar que o compo não está vazio
if(nomeAmigo === "") {
    alert("Por favor! insira um nome.");
    return; // Interrompe a execução da função

}

// Valide se o nome não está duplicado
if(amigos.incluir(nomeAmigo)) {
    alert(`O nome "${nomeAmigo}" já está na lista` );
    return;
}

// Adicione o nome ao array de amigos
    amigos.push(nomeAmigo);


// Limpar campo de entrada
inputAmigo.value = "";


// Atualize a lista no HTML
atualizarLista();

}

// função para atualizar a lista de amigos na interface
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpar o conteúdo atual da lista
    listaAmigos.innerHTML = ""; // limpa qualquer conteúdo anterior dentro do contêiner da lista

    // Percorrer o array com um loop for
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }


}



// Função para selecionar um amigo aleatório
function sortearAmigo() {
// Valide se há amigos disponíveis
if(amigos.length === 0) { // Verifique se o array 'amigos' está vazio.
    alert("Não há amigos disponíveis para sortear. Adicione pelo menos um.");
    return;

}


// Gere um índice aleatório
const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um número aleatório entre 0 e o comprimento da matriz negativa

// Obtenha o nome sorteado
const amigoSorteado = amigos[indiceAleatorio]; // Use o índice aleatório para obter um nome de array.

// mostre o resultado no HTML
const resultado = document.getElementById('resultado');
resultado.innerHTML = `Amigo Sorteado: <Strong>${amigoSorteado}</Strong>`;

}


