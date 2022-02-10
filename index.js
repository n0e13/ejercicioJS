[// 1.- variable tipo let de nombre 'variableSinValor' está declarada sin valor
let variableSinValor;

// 2.- 2 variables tipo let de nombres 'booleano1' y 'booleano2' está declarada y es de tipo booleano
let booleano1 = true;
let booleano2 = false;

// 3.- variable tipo const de nombre 'PI' está declarada con valor de 3,14
const PI = 3.14;

//4.- variable tipo const de nombre 'TAU' está declarada con valor de 2 veces PI
const TAU = 2 * PI;

// 5.- variable 'booleanoAnd' cuyo valor sea la comparación booleana 'booleano1 and booleano2'
let booleanoAnd = booleano1 == booleano2;

// 6.- variable 'booleanoNot' cuyo valor sea la comparación booleana 'no booleano1'
let booleanoNot = !booleano1;

// 7.- variable 'booleanoMix0' cuyo valor sea la comparación booleano '(booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)'
let booleanoMix0 = ((booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2)));

// 8.- crea la variable 'incrementarDesp' con valor 2 y asigna su valor con postincremento a 'resultadoDesp' incrementarDesp vale 2 resultadoDesp tienen el valor correcto
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

// 9.- crea la variable 'incrementarAntes' con valor 2 y asigna su valor con preincremento a 'resultadoAntes'
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// 10.- crea la variable 'contarHasta10_2' con valor 0 e incrementa su valor con un bucle for hasta que se verifique contarHasta10_2 === 10
let contarHasta10_2 = 0;

for (let i = 0; contarHasta10_2 < 10; i++) {
    contarHasta10_2++;
}

// 11.- Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++
let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI += postJ;
    postJ++;
}

// 12.- crea la variable 'sumaPares' con valor 0 a continuación crea un bucle que itere 10 veces (i < 10), si la iteración es par se deberá sumar a sumaPares el número de la iteración actual (i)
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
    if ((i % 2) === 0) {
        sumaPares += i;
    }
}

// 13.- variable tipo let de nombre 'variableValorNumerico' está declarada con valor numérico
let variableValorNumerico = 0;

// 14.- variable tipo const de nombre 'MiNombre' está declarada con valor de tu nombre 
const MiNombre = "Noemy";

//15.- variable tipo const de nombre 'MiNumeroFav' está declarada con valor numérico
const MiNumeroFav = 13;

// 16.- variable 'booleanoOr' cuyo valor sea la comparación booleana 'booleano1 or booleano2'
let booleanoOr = booleano1 || booleano2;

// 17.- variable 'booleanoMix1' cuyo valor sea la compración booleana '(booleano1 and TAU/2 sea igual a PI) or (variableValorNumerico mayor o igual que MiNumeroFav)'
let booleanoMix1 = ((booleano1 && (TAU / 2) === PI) || (variableValorNumerico >= MiNumeroFav));

// 18.- variable 'seisNoEsNueve' cuyo valor sea la comparación booleana '6 no es igual que 9'
let seisNoEsNueve = !(6 == 9);

// 19.- variable 'booleanoMix2' cuyo valor sea la comparación booleana 'variableValorNumerico positivo o menor que -(MiNumeroFav * TAU)
let booleanoMix2 = ((variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU)));

// 20.- variable 'valorSuma' cuyo valor sea la suma de MiNumeroFav y variableValorNumerico
let valorSuma = MiNumeroFav + variableValorNumerico;

// 21.- variable 'valorResta' cuyo valor sea la resta de MiNumeroFav menos variableValorNumerico
let valorResta = MiNumeroFav - variableValorNumerico;

// 22.- variable 'valorMultiplicacion' cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

// 23.- variable 'valorDivision' cuyo valor sea la division de MiNumeroFav entre 3
let valorDivision = (MiNumeroFav / 3);

// 24.- crea la variable 'contarHasta10' con valor 0 e incrementa su valor con un bucle while hasta que se verifique contarHasta10 === 10
let contarHasta10 = 0;

while (contarHasta10 < 10) {
    contarHasta10++;
    console.log(contarHasta10);
}

//25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ
let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
    ++preJ;
    preI += preJ;
}

// 26.- crea la variable 'sumaImpares' con valor 0 a continuación crea un bucle que itere 10 veces (i < 10), si la iteración es impar se deberá asumar a sumaPares el número de la iteración actual
let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    if ((i % 2) != 0) {
        sumaImpares += i;
    }
}
