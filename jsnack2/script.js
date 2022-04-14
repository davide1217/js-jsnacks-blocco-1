const word1 = prompt('scrivi una parola');
const word2 = prompt('scrivi una parola');

if(word1.length > word2.length) {
  document.querySelector('div').innerHTML = word2 + ' ' + word1
} else {
  document.querySelector('div').innerHTML = word1 + ' ' + word2
}