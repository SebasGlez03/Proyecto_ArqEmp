// Simulador de tareas "en tiempo real"
const tareas = [
    { alumno: "Juan Pérez", nombre: "Ensayo sobre el impacto ambiental", descripcion: "Ensayo de 2 cuartillas sobre el impacto ambiental en México.", materia: "Ciencias Ambientales" },
    { alumno: "María López", nombre: "Proyecto CRUD", descripcion: "Desarrollar una app CRUD con Java y MySQL.", materia: "Programación Avanzada" }
];

const listaTareas = document.getElementById("listaTareas");

// Función para renderizar tareas
function mostrarTareas() {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, i) => {
        const card = document.createElement("div");
        card.classList.add("tarea-card");
        card.innerHTML = `
            <div class="tarea-info">
                <h3>${tarea.nombre}</h3>
                <p>${tarea.descripcion}</p>
                <strong>Materia: ${tarea.materia}</strong>
                <p><em>Alumno: ${tarea.alumno}</em></p>
            </div>
            <button class="btn-calificar" data-index="${i}">Calificar</button>
        `;
        listaTareas.appendChild(card);
    });
}

// Llamar inicial
mostrarTareas();



// Modal “en proceso”
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
document.querySelectorAll(".modal-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        modal.style.display = "block";
    });
});
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Modal calificar
const modalCalificar = document.getElementById("modalCalificar");
const closeCalificar = document.querySelector(".closeCalificar");
const btnGuardar = document.getElementById("btnGuardarCalificacion");
const nombreTareaModal = document.getElementById("nombreTareaModal");
let tareaSeleccionada = null;

document.addEventListener("click", e => {
    if (e.target.classList.contains("btn-calificar")) {
        tareaSeleccionada = e.target.getAttribute("data-index");
        nombreTareaModal.textContent = tareas[tareaSeleccionada].nombre + " (" + tareas[tareaSeleccionada].alumno + ")";
        modalCalificar.style.display = "block";
    }
});

closeCalificar.onclick = () => modalCalificar.style.display = "none";
btnGuardar.onclick = () => {
    const calificacion = document.getElementById("calificacion").value;
    if (calificacion === "" || calificacion < 0 || calificacion > 100) {
        alert("Por favor ingrese una calificación válida entre 0 y 100.");
        return;
    }
    alert(`✅ Calificación guardada: ${calificacion} para ${tareas[tareaSeleccionada].alumno}`);
    modalCalificar.style.display = "none";
};
