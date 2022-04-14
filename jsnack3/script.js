const array = [];
let sum = 0
for(i = 0; i < 5; i++) {
  array.push(prompt('inserisci un numero'))
  
  if(array[i].includes(',')){
    alert('use \'.\' instead of \',\'')
    array.pop()
    array.push(prompt('inserisci un numero'))
  }
};

for(i = 0; i < array.length; i++) {
  sum += parseFloat(array[i])
}

document.querySelector('div').innerHTML = sum;
console.log();