/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    
    let area = l1 * l2;
    return area;
}

let l1 = 5;
let l2 = 10;
let areaDelRettangolo = area(l1, l2);
console.log("L'area del rettangolo è: " + areaDelRettangolo);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (n1, n2){
if(n1 === n2) {
    return (n1 + n2)*3;
} else {
    return n1 + n2
}}

let n1 = 32
let n2 = 33
console.log("il risultato della funzione è: " + crazySum(n1,n2))



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (n3){
return(n3) - 19;
}

let n3 = 34
console.log("Il risultato della funzione è: " + crazyDiff(n3) )


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n4) {
if (n4 <100 && n4 > 20) {
    return true
} else if (n4 === 400)
    return true 
  else {
    return false
  }
  
} 

let n4 = 19
console.log("Il risultato della funzione è: " + boundary(n4))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(p1){
if (p1 === " EPICODE"){
    return (p1)
} else { 
    return ("EPICODE" + p1)
}
  }

let p1 = " Web Developer"
console.log("Il risultato della funzione è: " + epify(p1))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 (n5){
if (n5 <= 0){
    return false
} if (n5 % 3 === 0 || n5 % 7 === 0){
    return true
} else {
    return false
}
}

let n5 = 43
console.log("Il risultato della funzione è: " + check3and7(n5))

/* ESERCIZIO 7 ---- ???
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
    let stringaInvertita = stringa.split('').reverse().join('');
    return stringaInvertita;
}

let stringaOriginale = "EPICODE";
let stringaInvertita = reverseString(stringaOriginale);
console.log("La stringa invertita è: " + stringaInvertita); 

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperfirst(stringhe){
return stringhe.split (" ")
.map((parole) => parole.charAt(0).toLocaleUpperCase() + parole.slice(1))
.join(" ");
}

let stringhe = "sono un web developer"
console.log("Il risultato della funzione è: "+ upperfirst(stringhe))



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringhe2){
  return (nuovaStringa)
}

let stringhe2 = "Sono di Viterbo"
let nuovaStringa = stringhe2.slice (1, -1)
console.log("Il risultato della funzione è: " + cutString(stringhe2))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
