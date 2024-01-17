function serieFibonacci() {
    let Numero = prompt("Ingrese un número para la secuencia Fibonacci");

    while (isNaN(Numero) || Numero === null || Numero === "") {
        Numero = prompt("Por favor, ingrese un número válido:");
    }

    let num1 = parseInt(Numero);
    let fibonacci = [0, 1];

    for (let i = 2; i < num1; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    console.log("La serie Fibonacci es:");

    for (let i = 0; i < num1; i++) {
        console.log(fibonacci[i]);
    }
}

serieFibonacci();