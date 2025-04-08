const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.3
});
const palabras = ["Programador 👨‍💻", "Diseñador 🎨", "Creativo 💡", " Cofyto 🧒🤵👨‍🎓📚🎓"];
let indice = 0;

function cambiarTexto() {
    indice = (indice + 1) % palabras.length;
    document.getElementById("changeTxt").textContent = palabras[indice];
}

setInterval(cambiarTexto, 3000);
document.querySelectorAll('.animar').forEach(el => observer.observe(el));
