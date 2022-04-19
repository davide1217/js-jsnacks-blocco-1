const array = ['giacomino','ugo','lello'];
const nome = prompt('nome');
const nomeCorretto = nome.toLowerCase();

let presente = false;
let i = -1;
do {

   i++
   if(nomeCorretto === array[i]){
   alert(`Mr ${nome}, you are welcome.`);
   presente = true;
 } else if(i === array.length - 1 && nomeCorretto != array[i]){
   alert(`Mr ${nome}, you are not invited.`)
 }

} while(i < array.length && !presente)
