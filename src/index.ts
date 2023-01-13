/*
const button = document.getElementById("button");
button.addEventListener("click", () => {
  alert("clicked!");
});
*/

function sum(a:number, b:number, args:number[]){
    let element :number = 0;
    for (let index = 0; index < args.length; index++) {
        element += args[index];
        
    }
    return a+b+element;
}
console.log(sum(1,2,[4,5,6,7]));