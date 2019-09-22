test=[1,2,3,4,5,6,7,8,9,0];
let temp=0;
function swap() {
   for(let i=0;i<test.length-1;i++){
      temp=test[i];
      test[i]=test[i+1];
      test[i+1]=temp;
   }

}
console.log(test);
swap();
console.log(test);
swap();
console.log(test);
swap();
console.log(test);
swap();
console.log(test);
swap();
console.log(test);
swap();
console.log(test);
swap();
console.log(test);
swap();
console.log(test);
swap();
console.log(test);
