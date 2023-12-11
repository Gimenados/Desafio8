const cssFiles = [
  "./css/estilo.css",
  "./css/estilo-retro.css",
  "./css/estilo-futuro.css",
];
let activeFile = 0;
const links = document.getElementsByTagName("link");

function onClick() {
  activeFile++;
  if (activeFile > 2) {
    activeFile = 0;
  }
  links[0].href = cssFiles[activeFile];
  console.log(cssFiles[activeFile]);
}

function recordarEstilo() {
  console.log("Haciendo clic en Recordar");
  const recordarButton = document.getElementById("recordarButton");
  recordarButton.classList.toggle("active");

  if (recordarButton.classList.contains("active")) {
    localStorage.setItem("recordadoIndex", activeFile);
  } else {
    localStorage.removeItem("recordadoIndex");
  }
}