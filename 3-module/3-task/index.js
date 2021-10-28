function camelize(str) {
let splitStr = str.split('-');
let mapStr = splitStr.map(function(word, index){
   if (index == 0){
    return word;
  } else {
    return word[0].toUpperCase() + word.slice(1);
  }
});
  let joinStr = mapStr.join('');
  return joinStr;
} 
