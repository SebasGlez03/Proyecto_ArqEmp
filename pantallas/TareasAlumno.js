// TAREAS ASIGNADAS POR DEFECTO (SIMULADAS)
const tareasAsignadas = [
    { nombre: "Investigación Sistemas", materia: "Informática", descripcion: "Descripción de tarea" },
    { nombre: "Ensayo Revolución", materia: "Historia", descripcion: "Descripción de tarea" },
    { nombre: "Ejercicios Álgebra", materia: "Matemáticas", descripcion: "Descripción de tarea" }
];

function cargarTareas() {
    const contenedor = document.getElementById("listaTareas");
    contenedor.innerHTML = "";

    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareasAsignadas.forEach((tarea, index) => {
        let tareaEntregada = tareasGuardadas.find(t => t.nombre === tarea.nombre);

        const div = document.createElement("div");
        div.classList.add("tarea-card");

        div.innerHTML = `
            <h3>${tarea.nombre}</h3>
            <p><strong>Materia:</strong> ${tarea.materia}</p>
            <p><strong>Descripción:</strong> ${tarea.descripcion}</p>

            ${
                tareaEntregada
                ? `<p>✅ Entregada | Calificación: <strong>${tareaEntregada.calificacion || "Pendiente"}</strong></p>`
                : `<input type="file" id="archivo${index}">
                   <button onclick="subirTarea(${index})">Subir tarea</button>`
            }
        `;

        contenedor.appendChild(div);
    });
}

function subirTarea(index) {
    let archivo = document.getElementById(`archivo${index}`).files[0];

    if (!archivo) {
        alert("Selecciona un archivo");
        return;
    }

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareas.push({
        nombre: tareasAsignadas[index].nombre,
        materia: tareasAsignadas[index].materia,
        descripcion: tareasAsignadas[index].descripcion,
        archivo: archivo.name,
        calificacion: ""
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));
    alert("✅ Tarea enviada correctamente");

    cargarTareas();
}

document.addEventListener("DOMContentLoaded", cargarTareas);
