
let arr = [10,12,08,05,22,29,45,89,07,03,29,25,27,28,23];

arr.filter((item)=>{
  if(item == 3){
    console.log(item);
  }

});


let value = 7569256956;
sum = 0;
while(value){
  sum += value %10;
  value = Math.floor(value/10);
}
console.log(sum);
