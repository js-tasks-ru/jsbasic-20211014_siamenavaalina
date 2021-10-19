function truncate(str, maxlength) {
 let trunString = '';
 if(str.length > maxlength){
 	trunString = str.slice(0, maxlength - 1) + "…";
 	return trunString;
 }
 return str;
}
console.log(truncate('AlinaSiamenava', 3))
