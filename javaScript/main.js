//Variable del resultado final
let resultado = document.getElementById("resultado-final");

//Variables de los numeros
let cero = document.getElementById("0");
let uno = document.getElementById("1");
let dos = document.getElementById("2");
let tres = document.getElementById("3");
let cuatro = document.getElementById("4");
let cinco = document.getElementById("5");
let seis = document.getElementById("6");
let siete = document.getElementById("7");
let ocho = document.getElementById("8");
let nueve = document.getElementById("9");

//Eventos para agregar los numeros a el resultado para hacer las operaciones
cero.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 0;
};
uno.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 1;
};
dos.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 2;
};
tres.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 3;
};
cuatro.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 4;
};
cinco.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 5;
};
seis.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 6;
};
siete.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 7;
};
ocho.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 8;
};
nueve.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + 9;
};

//Borrar el ultimo numero

let borrarUnNumero = document.getElementById("del");
let operacionBorrarNumero;
borrarUnNumero.onclick = function (e) {
  e.preventDefault();
  operacionBorrarNumero = resultado.innerText;
  let nuevoResultado = operacionBorrarNumero.substring(
    0,
    operacionBorrarNumero.length - 1
  );
  resultado.innerText = nuevoResultado;
};
///Eventos para las operaciones. Para agregar los simbolos e indicar que operacion tiene que hacer

let resultadoOperacionesPequeño = document.getElementById("resultado-operaciones");

function limpiarResultadoFinal() {
  resultado.textContent = "";
}

let operacion;
let operacionPrimera;
let operacionSegunda;

let sumar = document.getElementById("sumar");
sumar.onclick = function (e) {
  e.preventDefault();
  operacionPrimera = resultado.innerText;
  operacion = "+";
  resultadoOperacionesPequeño.style.opacity = "1";
  resultadoOperacionesPequeño.innerText = resultado.innerText + "+";
  limpiarResultadoFinal();
};
let dividir = document.getElementById("/");

dividir.onclick = function (e) {
  e.preventDefault();
  operacionPrimera = resultado.innerText;
  operacion = "/";
  resultadoOperacionesPequeño.style.opacity = "1";
  resultadoOperacionesPequeño.innerText = resultado.innerText + "/";
  limpiarResultadoFinal();
};

let multiplicar = document.getElementById("x");
multiplicar.onclick = function (e) {
  e.preventDefault();
  operacionPrimera = resultado.innerText;
  operacion = "*";
  resultadoOperacionesPequeño.style.opacity = "1";
  resultadoOperacionesPequeño.innerText = resultado.innerText + "*";
  limpiarResultadoFinal();
};
let restar = document.getElementById("-");
restar.onclick = function (e) {
  e.preventDefault();
  operacionPrimera = resultado.innerText;
  operacion = "-";
  resultadoOperacionesPequeño.style.opacity = "1";
  resultadoOperacionesPequeño.innerText = resultado.innerText + "-";
  limpiarResultadoFinal();
};
let punto = document.getElementById(".");
punto.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = resultado.innerText + ".";
};

function resetear() {
  resultado.textContent = "";
  operacionPrimera = 0;
  operacionSegunda = 0;
  operacion = "";
}

let reset = document.getElementById("reset");

reset.onclick = function (e) {
  e.preventDefault();
  resultado.innerText = "";
  resultadoOperacionesPequeño.style.opacity = "0";
};

let igual = document.getElementById("igual");
igual.onclick = function (e) {
  e.preventDefault();
  resultadoOperacionesPequeño.style.opacity = "0";
  operacionSegunda = resultado.innerText;
  resolverCalculo();
};

function resolverCalculo() {
  let resultadoConOperadores = 0;
  switch (operacion) {
    case "+":
      resultadoConOperadores = parseFloat(operacionPrimera) + parseFloat(operacionSegunda);

      break;
    case "-":
      resultadoConOperadores = parseFloat(operacionPrimera) - parseFloat(operacionSegunda);
      break;
    case "*":
      resultadoConOperadores = parseFloat(operacionPrimera) * parseFloat(operacionSegunda);
      break;
    case "/":
      resultadoConOperadores = parseFloat(operacionPrimera) / parseFloat(operacionSegunda);
      break;
  }

  //Limitar los decimales cuando sea necesario
  resultadoConOperadores =
    Math.round(resultadoConOperadores * 10000000) / 10000000;

  //Resultado final
  resultado.innerText = resultadoConOperadores;
}

//Array para ir cambiar el color de los input


const buttons = document.getElementsByClassName("button");
const arrayButtons = [...buttons];

arrayButtons.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";

        arrayButtons
            .filter(function (item) {
                return item != element;
            })
            .forEach((item) => {
                item.style.opacity = "0";
            });
    });
});

//Cambiar tema

const themeOne = document.getElementById("theme-uno");
const themeTwo = document.getElementById("theme-dos");
const theme_three = document.getElementById("theme-tres");


themeOne.addEventListener("click", () => {
  if (themeOne.checked) {
    document.body.classList.remove("theme-2");
    document.body.classList.remove("theme-3");
  
  }
});

themeTwo.addEventListener("click", () => {
  if (themeTwo.checked) {
    document.body.classList.remove("theme-3");
    document.body.classList.add("theme-2");
 
  }
});

theme_three.addEventListener("click", () => {
  if (theme_three.checked) {
    document.body.classList.remove("theme-2");
    document.body.classList.add("theme-3");

  }
});


