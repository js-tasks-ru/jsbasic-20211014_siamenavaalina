function sumSalary(salaries) {
let sum = 0;
   for (let key in salaries){
     if(isFinite(salaries[key]))
      if (!isNaN(salaries[key])){
         sum = sum + salaries[key];
      }
   }
   return sum;
 }