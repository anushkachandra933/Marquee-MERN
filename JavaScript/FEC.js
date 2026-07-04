debugger;
console.log("Global Execution Context starts");

var globalVariable = "I am a global variable";

console.log(globalVariable);
console.log(greet());
greet();

console.log("Global Execution Context ends");

function greet(){
    var name = 'Hashtag';
    console.log('Inside Global Function');
}