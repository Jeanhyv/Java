//INICIO

// Ejemplo 1: Cambiar texto
function cambiarTexto() {
  document.getElementById("texto").innerText = "¡El texto ha cambiado con JavaScript!";
}

// Ejemplo 2: Mostrar alerta
function mostrarAlerta() {
  alert("¡Hola! Este mensaje fue generado con JavaScript 😄");
}

// Ejemplo 3: Cambiar color de fondo
function cambiarColor() {
  const colores = ["#f4f4f9", "#ffe6e6", "#e6ffe6", "#e6f0ff", "#fff5e6"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}

// TIPOS DE DATOS EN JAVASCRIPT

// Función para mostrar el tipo de un valor
function mostrarTipo(valor) {
  alert(`El tipo de dato es: ${typeof valor}`);
}

// Función para mostrar un objeto
function mostrarObjeto() {
  const persona = { nombre: "Jean", edad: 21, activo: true };
  alert(`Objeto persona:\nNombre: ${persona.nombre}\nEdad: ${persona.edad}\nActivo: ${persona.activo}`);
}

// Función para mostrar un arreglo
function mostrarArreglo() {
  const numeros = [10, 20, 30];
  alert(`Arreglo de números: ${numeros.join(", ")}`);
}

// ----------------------
// OPERADORES Y EXPRESIONES
// ----------------------

// Ejemplo de operadores aritméticos
function ejemploAritmetico() {
  let a = 10, b = 3;
  let resultado = `
Suma: ${a + b}
Resta: ${a - b}
Multiplicación: ${a * b}
División: ${a / b}
Módulo: ${a % b}
Incremento (++a): ${++a}
Decremento (--b): ${--b}
  `;
  alert(resultado);
}

// Ejemplo de operadores de asignación
function ejemploAsignacion() {
  let x = 5;
  x += 3; // equivale a x = x + 3
  x *= 2;
  alert(`Resultado después de x += 3 y x *= 2 es: ${x}`);
}

// Ejemplo de operadores de comparación
function ejemploComparacion() {
  let a = 10, b = "10";
  let texto = `
a == b → ${a == b}
a === b → ${a === b}
a != b → ${a != b}
a !== b → ${a !== b}
a > 5 → ${a > 5}
a <= 10 → ${a <= 10}
  `;
  alert(texto);
}

// Ejemplo de operadores lógicos
function ejemploLogico() {
  let x = true, y = false;
  let texto = `
x && y → ${x && y}
x || y → ${x || y}
!x → ${!x}
  `;
  alert(texto);
}

// Ejemplo de concatenación
function ejemploConcatenacion() {
  let saludo = "Hola";
  let nombre = "Jean";
  alert(saludo + " " + nombre + " 👋");
}

// OPERADORES CON DIFERENTES SEMÁNTICAS

// El operador "+" con distintas funciones
function ejemploMas() {
  let suma = 5 + 10;
  let texto = "Hola" + " Mundo";
  alert(`5 + 10 = ${suma}\n"Hola" + " Mundo" = ${texto}`);
}

// Comparación == vs ===
function ejemploComparacionEstricta() {
  let a = 5;
  let b = "5";
  alert(`5 == "5" → ${a == b}\n5 === "5" → ${a === b}`);
}

// Operador ternario
function ejemploTernario() {
  let edad = prompt("Ingresa tu edad:");
  let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
  alert(mensaje);
}

// CONVERSIÓN DE TIPOS Y EXPRESIONES

// Conversión explícita a número
function convertirNumero() {
  let valor = "25";
  let convertido = Number(valor);
  alert(`Valor original: "${valor}" (${typeof valor})\nConvertido: ${convertido} (${typeof convertido})`);
}

// Conversión explícita a cadena
function convertirCadena() {
  let numero = 123;
  let texto = String(numero);
  alert(`Valor original: ${numero} (${typeof numero})\nConvertido: "${texto}" (${typeof texto})`);
}

// Conversión explícita a booleano
function convertirBooleano() {
  let falsy = 0;
  let truthy = "hola";
  alert(`Boolean(${falsy}) → ${Boolean(falsy)}\nBoolean("${truthy}") → ${Boolean(truthy)}`);
}

// Coerción de tipos (implícita)
function coercionSuma() {
  let resultado = "5" + 2;
  alert(`"5" + 2 = ${resultado} (${typeof resultado})`);
}

function coercionResta() {
  let resultado = "10" - 5;
  alert(`"10" - 5 = ${resultado} (${typeof resultado})`);
}

function coercionComparacion() {
  let a = 0 == false;
  let b = "5" == 5;
  alert(`0 == false → ${a}\n"5" == 5 → ${b}`);
}

// VARIABLES EN JAVASCRIPT

// Ejemplo con var
function ejemploVar() {
  var nombre = "Jean";
  var nombre = "Héctor"; // Se puede redeclarar
  alert(`Variable var:\nNombre actual: ${nombre}`);
}

// Ejemplo con let
function ejemploLet() {
  let edad = 21;
  edad = 22; // Puede cambiar, pero no redeclararse en el mismo bloque
  alert(`Variable let:\nEdad actualizada: ${edad}`);
}

// Ejemplo con const
function ejemploConst() {
  const pais = "México";
  alert(`Variable const:\nPaís: ${pais}`);
}

// Ejemplo de hoisting con var
function ejemploHoisting() {
  alert("Revisa la consola para ver el resultado del hoisting.");
  console.log(x); // undefined (la variable existe pero aún no tiene valor)
  var x = 5;
  console.log("Después de asignar:", x);
}

// Ejemplo de ámbito (scope) de bloque
function ejemploBloques() {
  alert("Abre la consola para ver el comportamiento de let y const.");
  {
    let a = 10;
    const b = 20;
    console.log("Dentro del bloque → a:", a, "b:", b);
  }
  try {
    console.log("Fuera del bloque → a:", a);
  } catch (error) {
    console.log("Error: 'a' no está definida fuera del bloque.");
  }
}

// ENTRADA Y SALIDA DE DATOS

// Ejemplo con prompt()
function ejemploPrompt() {
  let nombre = prompt("¿Cómo te llamas?");
  if (nombre) {
    alert("¡Hola " + nombre + "! Bienvenido a JavaScript.");
  } else {
    alert("No ingresaste ningún nombre.");
  }
}

// Ejemplo con confirm()
function ejemploConfirm() {
  let continuar = confirm("¿Deseas continuar?");
  alert("Tu respuesta fue: " + (continuar ? "Sí" : "No"));
}

// Ejemplo con console.log()
function ejemploConsola() {
  console.log("Este es un mensaje mostrado en la consola del navegador.");
  alert("Mensaje enviado a la consola. Ábrela con F12 → pestaña 'Console'.");
}

// Ejemplo con document.write()
function ejemploDocumento() {
  document.write("<h2>¡Hola desde document.write()!</h2>");
  document.write("<p>Este texto se generó directamente desde JavaScript.</p>");
  document.write("<a href='index_entrada_salida.html'>Volver</a>");
}

// Ejemplo de entrada desde un input
function mostrarDesdeInput() {
  const nombre = document.getElementById("inputNombre").value;
  const resultado = document.getElementById("resultadoInput");

  if (nombre.trim() !== "") {
    resultado.textContent = `Hola ${nombre}, gracias por usar JavaScript 😄`;
  } else {
    resultado.textContent = "Por favor, escribe tu nombre antes de continuar.";
  }
}

// ESTRUCTURAS DE CONTROL

// if / else
function ejemploIf() {
  let edad = prompt("Ingresa tu edad:");
  if (edad >= 18) {
    alert("Eres mayor de edad 🎉");
  } else {
    alert("Eres menor de edad 🚫");
  }
}

// if / else if / else
function ejemploElseIf() {
  let nota = prompt("Ingresa tu calificación:");
  nota = Number(nota);

  if (nota >= 90) {
    alert("Excelente 😎");
  } else if (nota >= 70) {
    alert("Aprobado ✅");
  } else {
    alert("Reprobado ❌");
  }
}

// switch
function ejemploSwitch() {
  let dia = prompt("Ingresa un día de la semana (Lunes, Martes, etc):");
  switch (dia) {
    case "Lunes":
      alert("Inicio de semana 💪");
      break;
    case "Viernes":
      alert("¡Ya casi es fin de semana! 🎉");
      break;
    case "Sábado":
    case "Domingo":
      alert("Fin de semana 😎");
      break;
    default:
      alert("Día normal 💤");
  }
}

// for
function ejemploFor() {
  console.log("Ejemplo de bucle for:");
  for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
  }
  alert("Revisa la consola para ver el resultado del bucle for (F12 → Console).");
}

// while
function ejemploWhile() {
  console.log("Ejemplo de bucle while:");
  let i = 1;
  while (i <= 3) {
    console.log("Iteración: " + i);
    i++;
  }
  alert("Revisa la consola para ver el resultado del bucle while.");
}

// do...while
function ejemploDoWhile() {
  console.log("Ejemplo de bucle do...while:");
  let x = 1;
  do {
    console.log("Número: " + x);
    x++;
  } while (x <= 3);
  alert("Revisa la consola para ver el resultado del bucle do...while.");
}

// FUNCIONES EN JAVASCRIPT

// Función simple
function ejemploFuncionSimple() {
  function saludar() {
    alert("¡Hola desde una función!");
  }
  saludar();
}

// Función con parámetros
function ejemploFuncionParametros() {
  let a = Number(prompt("Ingresa el primer número:"));
  let b = Number(prompt("Ingresa el segundo número:"));
  function sumar(x, y) {
    return x + y;
  }
  alert("La suma es: " + sumar(a, b));
}

// Función con retorno
function ejemploFuncionRetorno() {
  function multiplicar(x, y) {
    return x * y;
  }
  let resultado = multiplicar(4, 5);
  alert("El resultado de 4 × 5 es: " + resultado);
}

// Función anónima
function ejemploFuncionAnonima() {
  const saludar = function() {
    alert("Hola desde una función anónima 😎");
  };
  saludar();
}

// Función flecha
function ejemploFuncionFlecha() {
  const saludarFlecha = (nombre) => "Hola " + nombre + "!";
  let nombre = prompt("¿Cómo te llamas?");
  alert(saludarFlecha(nombre));
}

// Función que llama a otra función
function ejemploFuncionAnidada() {
  function cuadrado(num) {
    return num * num;
  }
  function mostrarResultado() {
    alert("El cuadrado de 4 es: " + cuadrado(4));
  }
  mostrarResultado();
}

// OBJETOS, PROPIEDADES Y MÉTODOS

// Crear un objeto simple
function ejemploObjetoSimple() {
  let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
  };
  alert(`Coche creado:\nMarca: ${coche.marca}\nModelo: ${coche.modelo}\nAño: ${coche.año}`);
}

// Acceder a propiedades
function ejemploAccederPropiedades() {
  let coche = {
    marca: "Nissan",
    modelo: "Versa",
    año: 2021
  };
  alert(`Marca: ${coche.marca}\nModelo: ${coche["modelo"]}`);
}

// Modificar propiedades
function ejemploModificarPropiedades() {
  let coche = {
    marca: "Honda",
    modelo: "Civic",
    año: 2019
  };
  coche.color = "Rojo";
  coche.año = 2024;
  alert(`Coche actualizado:\n${coche.marca} ${coche.modelo}\nColor: ${coche.color}\nAño: ${coche.año}`);
}

// Agregar métodos
function ejemploMetodo() {
  let persona = {
    nombre: "Jean",
    saludar: function() {
      alert(`Hola, soy ${this.nombre} 👋`);
    }
  };
  persona.saludar();
}

// Objetos anidados
function ejemploObjetoAnidado() {
  let estudiante = {
    nombre: "Héctor",
    direccion: {
      ciudad: "México",
      cp: 12345
    }
  };
  alert(`Estudiante: ${estudiante.nombre}\nCiudad: ${estudiante.direccion.ciudad}\nCódigo postal: ${estudiante.direccion.cp}`);
}

// Recorrer propiedades con for...in
function ejemploRecorrerObjeto() {
  let coche = {
    marca: "Ford",
    modelo: "Focus",
    año: 2018,
    color: "Azul"
  };
  console.log("Propiedades del objeto 'coche':");
  for (let propiedad in coche) {
    console.log(`${propiedad}: ${coche[propiedad]}`);
  }
  alert("Revisa la consola para ver todas las propiedades (F12 → Console).");
}
