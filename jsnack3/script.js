const numero1 = parseInt(prompt('inserisci un numero'));
const numero2 = parseInt(prompt('inserisci un numero'));

if(numero1 > numero2) {
  document.getElementById('_maggiore').innerHTML = numero1
} else if(numero2 > numero1){
  document.getElementById('_maggiore').innerHTML = numero2
} else{
  document.getElementById('_maggiore').innerHTML = 'WOW!!! It seem\'s they are equal'
}