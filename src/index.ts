let dato = document.getElementById("dato");
let buttonOk = document.getElementById("buttonOk");

buttonOk.addEventListener("click", () => {
  let valorIngresado: number = Number(dato.value);
  let par: number = valorIngresado % 2;

  if (valorIngresado === 0) {
    console.log("El numero ingresado es cero");
  } else {
    if (par === 0) {
      console.log("El numero ingresado es par");
    } else {
      console.log("El numero ingresado es impar");
    }
  }
});
