function filterRange(arr, a, b) {
 let filterNum = arr.filter(function(item) {
   if(b >= item >= a){
     return true;
   }
 });
  return (filterNum);
}