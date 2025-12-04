// Modal "En proceso"
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// Acción del botón "Agregar tarea"
document.querySelectorAll(".btn-agregar").forEach(boton => {
    boton.addEventListener("click", () => {
        alert("Tarea agregada correctamente ✅");
    });
});
