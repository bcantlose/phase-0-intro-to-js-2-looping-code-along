// Code your solutions in this file
function writeCards(name, value){
let myArray = []
for(let i=0; i < name.length; i++) {
    myArray.push(`Thank you, ${name[i]}, for the wonderful ${value} gift!`)
}
return myArray}

function countDown(i){
    while(i > -1)
    {
        console.log(i);
        i--;
    
    }
}

countDown();
console.log(countDown);