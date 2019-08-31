/**
 * Funcion para sumar dos numeros
 * @param {number} a 
 * @param {number} b 
 */
function sum(a, b){
    return a + b;
}

/**
 * Funcion para restar dos numeros
 * @param {number} a 
 * @param {number} b 
 */
function diff(a, b){
    return a - b;
}

/**
 * Funcion para un producto de dos numeros
 * @param {Number} a 
 * @param {Number} b 
 */

function prod(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

module.exports = {
    sum,
    diff,
    prod,
    div
}