function getMinMax(str) {
let splitStr = str.split(' ');
   let minV = +splitStr[0];
   let maxV = minV;
for (let i = 0; i < splitStr.length; i++){
  let k = +splitStr[i];
 if(k < minV ){ 
   minV = k;
 }
  if(k > maxV ) {
    maxV = k;
  }
}
return {min: minV, max: maxV};
}
