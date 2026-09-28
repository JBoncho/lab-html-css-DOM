document.querySelector("h1").textContent = "Adiós";

document.querySelector("#rojo").style.color = "orange";

const encabezado = document.createElement("h5");

//éste cambia a marrón
encabezado.textContent = "Haz clic aquí";

encabezado.addEventListener("click", function () {
  encabezado.style.color = "brown";
});

document.body.appendChild(encabezado);
