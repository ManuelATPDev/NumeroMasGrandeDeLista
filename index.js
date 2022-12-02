//inicializamos el array
let numeros = [3, 4, 7, 12, 14, 25];
//inicializamos la variable que almacena el número máximo
let max = 0;
//inicializamos el contador de la opción 2
let i = 0;

//opcion1 se utiliza un ciclo for para obtener el máximo número
function maximo1() {
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  console.log("El número más grande de la lista con el método 1 es: "+max)
}

maximo1()

//opcion2 se utiliza un ciclo while para obtener el máximo número
function maximo2() {
  while (i < numeros.length) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
    i++
  }
  console.log("El número más grande de la lista con el método 2 es: "+max);
}

maximo2()