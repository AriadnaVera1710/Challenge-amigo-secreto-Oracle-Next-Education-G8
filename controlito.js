const modal = document.getElementById('modal'); 
const modalAmigo = document.getElementById('modalAmigo'); // Donde mostramos el amigo sorteado
const closeModal = document.querySelector('.close'); 
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Para que nos se ponga el modal al reiniciarlo
});

let nombres = []; 

function agregarAmigo (){
    const input= document.getElementById('amigo');
    const nombre= input.value.trim();
    if (nombre === ""){
        alert("Ingresa un nombre válido, por fis");
         return;
                }
    nombres.push(nombre); 
    input.value = ""; 
    actualizarLista();
    console.log(nombres);
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Verificamos si la tecla es "Enter"
        agregarAmigo(); 
    }
});

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    nombres.forEach((nombre, index) => {
    const li = document.createElement('li');
    const emoji = (index % 2 === 0) ? "🦉" : "🪶"; 
    li.innerHTML = `<span class="emoji">${emoji}</span> ${index + 1}. ${nombre}`;
    lista.appendChild(li);
    });
}

// Función para sortear un amigo y mostrar el modal
function sortearAmigo() {
    if (nombres.length === 0) { // Verifica si hay amigos en la lista
        alert("No hay amigos en la lista para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length); // Genera un índice aleatorio
    const amigoSorteado = nombres[indiceAleatorio]; // Obtén el amigo sorteado

    modalAmigo.textContent = amigoSorteado; // Muestra el amigo en el modal
    modal.style.display = "flex"; // Muestra el modal solo cuando sortees
}

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Oculta el modal al cerrarlo
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Oculta el modal al hacer clic fuera
    }
});
