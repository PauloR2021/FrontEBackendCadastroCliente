const toggle = document.getElementById("themeToggle");

// Carregar tema salvo
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.classList.add("toggle-active");
}

// Clique no botão
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.classList.toggle("toggle-active");

    // Salvar tema
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
