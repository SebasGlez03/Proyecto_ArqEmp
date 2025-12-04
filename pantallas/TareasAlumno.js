function cargarTareas() {
    const contenedor = document.getElementById("listaTareas");
    contenedor.innerHTML = "";

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareas.forEach((tarea) => {
        const div = document.createElement("div");
        div.classList.add("tarea-card");

        div.innerHTML = `
            <h3>${tarea.nombre}</h3>
            <p>${tarea.descripcion}</p>
            <strong>${tarea.materia}</strong>
            <p>📎 Archivo: ${tarea.archivo || "No subido"}</p>
            <p>✅ Calificación: <strong>${tarea.calificacion || "Pendiente"}</strong></p>
        `;

        contenedor.appendChild(div);
    });
}

function agregarTarea() {
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let materia = document.getElementById("materia").value;
    let archivo = document.getElementById("archivo").files[0];

    if (!nombre || !descripcion || !materia) {
        alert("Completa todos los campos");
        return;
    }

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareas.push({
        nombre,
        descripcion,
        materia,
        archivo: archivo ? archivo.name : "Sin archivo",
        calificacion: ""
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));

    alert("✅ Tarea agregada correctamente");

    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("archivo").value = "";

    cargarTareas();
}

document.addEventListener("DOMContentLoaded", cargarTareas);
