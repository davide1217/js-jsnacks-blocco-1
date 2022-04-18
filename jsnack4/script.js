const array = ['giacomino','ugo','lello'];
const nome = prompt('nome');
const nomeCorretto = nome.toLowerCase();

let i = 0;
do {
   if(nomeCorretto === array[i]){
   alert(`Mr ${nome}, you are welcome.`);
 } else if(i === array.length - 1 && nomeCorretto !== array[i]){
   alert(`Mr ${nome}, you are not invited.`)
 } else {
   i++
  }
 
} while(i < array.length - 1 || nomeCorretto !== array[i])

