const array = [];
let control;
let sum = 0;
const ripetizioni = 5;

for(i = 0; i < ripetizioni; i++) {
  array.push(prompt('inserisci un numero'))

  if(array[i].includes(',')){
    for(array[i]; array[i].includes(','); array.push(prompt('inserisci un numero'))){
      alert('use \'.\' instead of \',\'')
      array.pop()
    }
  }

  sum += parseFloat(array[i])
};

document.querySelector('div').innerHTML = sum;


/*let i = 0;

while(i < ripetizioni){

  array.push(prompt('inserisci un numero'))
  control += parseFloat(array[i])

  if(array[i].includes(',')) {
    while(array[i].includes(',')){
      alert('use \'.\' instead of \',\'')
      array.pop()
      array.push(prompt('inserisci un numero'))
    } 
  }
  

  sum += parseFloat(array[i])

  i++
}

document.querySelector('div').innerHTML = sum;*/



