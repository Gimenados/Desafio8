const cssFiles = [
  "./css/estilo.css",
  "./css/estilo-retro.css",
  "./css/estilo-futuro.css",
];
let activeFile = 0;
const links = document.getElementsByTagName("link");

// Verifica si hay un estilo recordado en el localStorage al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const recordadoIndex = localStorage.getItem("recordadoIndex");
  if (recordadoIndex !== null) {
    activeFile = parseInt(recordadoIndex, 10);
    links[0].href = cssFiles[activeFile];
  }
});

function onClick() {
  activeFile++;
  if (activeFile > 2) {
    activeFile = 0;
  }
  links[0].href = cssFiles[activeFile];
  console.log(cssFiles[activeFile]);
}

function resetForm() {
  var form = document.getElementById("miForm");
  var currentIndex = activeFile;
  var currentStyle = links[0].href;
  form.setAttribute("novalidate", true);
  form.reset();
  setTimeout(function () {
    form.removeAttribute("novalidate");
    activeFile = currentIndex;
    links[0].href = currentStyle;
  }, 100);
}

function recordarEstilo() {
  const recordarButton = document.getElementById("recordarButton");
  recordarButton.classList.toggle("active");

  if (recordarButton.classList.contains("active")) {
    localStorage.setItem("recordadoIndex", activeFile);
  } else {
    localStorage.removeItem("recordadoIndex");
  }
}