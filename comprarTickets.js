
const estudiante = 0.2,
  trainee = 0.5,
  junior = 0.85,
  ticket = 200;
 let cantidad = 1;
let categoriaSeleccionada = "estudiante";

function verPrecio() {
  let precio = 0;
  cantidad = document.getElementById("inputCantidad").value;
  categoriaSeleccionada = document.getElementById("inputCategoria").value;
  switch (categoriaSeleccionada) {
    case "estudiante":
      precio = ticket * estudiante * cantidad;
      break;
    case "trainee":
      precio = ticket * trainee * cantidad;
      break;
    case "junior":
      precio = ticket * junior * cantidad;
      break;
      case "general":
        precio = ticket * cantidad;
        break;
      default:
        precio = 0;
  }
  document.getElementById("precioTotal").innerHTML = precio;
}

function borrarPrecio() {
  document.getElementById("precioTotal").innerHTML = "";
  document.getElementById("inputCantidad").value = "1";
  document.getElementById("inputCategoria").value = "estudiante";
  document.getElementById("inputNombre").value = "";
  document.getElementById("inputApellido").value = "";
  document.getElementById("inputCorreo").value = "";

}
