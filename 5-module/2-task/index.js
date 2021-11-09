function toggleText() {
let button = document.querySelector('button');
let text = document.getElementById('text');
button.onclick = function(){
if (text.hasAttribute('hidden')){
  text.removeAttribute('hidden');
}
else{
  text.setAttribute('hidden', 'hidden');
}
}
}
