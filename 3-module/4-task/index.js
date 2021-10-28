function showSalary(users, age) {
  let userName = [];   
  
for(let user of users){ 
  if(user.age <= age){ 
 userName.push(user.name + ', ' + user.balance);
  }
}
let joinUserName =  userName.join('\n');
  return joinUserName;
}