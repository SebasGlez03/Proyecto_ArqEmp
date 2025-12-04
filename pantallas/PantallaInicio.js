// Activar enlace del menú
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

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
