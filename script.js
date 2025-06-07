// Alterar tema: Claro/ Escuro
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// 2 Menu responsivo
function toggleMenu() {
  document.querySelector(".link").classList.toggle("active");
}

// 3 Compartilhamento
function shareRecipe() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href,
    });
  } else {
    alert("Seu navegador não suporta compartilhamento.");
  }
}

// 4 Validação do formulário
function validateForm(event) {
  const nome = document.getElementById("nome");
  if (!nome || !nome.value.trim()) {
    event.preventDefault();
    alert("Por favor, preencha o nome!");
  }
}

// 5. Animacao ao rolar a pagina
function animateOnScroll() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.classList.add("show");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  animateOnScroll();
});

window.addEventListener("scroll", animateOnScroll);
