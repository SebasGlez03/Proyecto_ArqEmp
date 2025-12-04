document.addEventListener("DOMContentLoaded", () => cargarTareas());

function cargarTareas() {
    const contenedor = document.getElementById("listaTareas");
    contenedor.innerHTML = "";

    let tareas = JSON.parse(localStorage.getItem("tareas"));

    if (!tareas || tareas.length === 0) {
        contenedor.innerHTML = "<p>No hay tareas entregadas aún.</p>";
        return;
    }

    tareas.forEach((tarea, index) => {
        const div = document.createElement("div");
        div.classList.add("tarea-card");

        div.innerHTML = `
            <h3>${tarea.nombre}</h3>
            <p><b>Materia:</b> ${tarea.materia}</p>
            <p><b>Descripción:</b> ${tarea.descripcion}</p>
            <p>📎 Archivo: ${tarea.archivo}</p>

            <div style="margin-top:10px;">
                <input type="number" min="0" max="100" id="calif${index}" value="${tarea.calificacion || ""}">
                <button onclick="guardarCalificacion(${index})">Guardar</button>
            </div>
        `;

        contenedor.appendChild(div);
    });
}

function guardarCalificacion(index) {
    let tareas = JSON.parse(localStorage.getItem("tareas"));

    let input = document.getElementById(`calif${index}`);
    tareas[index].calificacion = input.value;

    localStorage.setItem("tareas", JSON.stringify(tareas));

    alert("✅ Calificación guardada correctamente");
}
