let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("nombre");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear. Agrega al menos uno.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];
    const resultado = document.getElementById("resultado");

    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;

    let tiempo = 0;
    const intervalo = setInterval(() => {
        resultado.textContent = `Sorteando... ${amigos[Math.floor(Math.random() * amigos.length)]}`;
        tiempo += 100;
        if (tiempo >= 2000) { 
            clearInterval(intervalo);
            resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
        }
    }, 100);
}
