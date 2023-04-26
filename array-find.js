const numbers =[1,2,3,4,5,6];
const result=numbers.find(function(currentValue,currentIndex,arr){
return currentValue>4;
})
console.log(result);
// nothing