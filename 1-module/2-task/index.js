
function print(text) {
  console.log(text);
}


function isValid(userName) {
 // let hasSpace = userName.includes(' ');
if(userName === null) {
 	return false;
   
 } 
 
  if (userName.indexOf(' ') >= 0){
 	return false;
 }


 if(userName.length < 4){
 	return false;
 }

return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
