const lista = document.getElementById("listaTareas");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");
const guardar = document.getElementById("guardar");

let tareaSeleccionada = null;

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function mostrarTareas() {
    lista.innerHTML = "";

    tareas.forEach((t, index) => {
        lista.innerHTML += `
            <div class="tarea">
                <h3>${t.nombre}</h3>
                <p>${t.descripcion}</p>
                <strong>${t.materia}</strong>
                <p>Alumno: ${t.alumno}</p>
                <p>Calificación: ${t.calificacion ?? "Sin calificar"}</p>
                <button class="calificar-btn" onclick="abrirModal(${index})">Calificar</button>
            </div>
        `;
    });
}

function abrirModal(index) {
    tareaSeleccionada = index;
    modal.style.display = "block";
}

cerrar.onclick = () => modal.style.display = "none";

guardar.onclick = () => {
    const cal = document.getElementById("calificacion").value;
    if (cal === "" || cal < 0 || cal > 100) {
        alert("Calificación inválida");
        return;
    }

    tareas[tareaSeleccionada].calificacion = cal;
    localStorage.setItem("tareas", JSON.stringify(tareas));
    modal.style.display = "none";
    mostrarTareas();
};

mostrarTareas();
