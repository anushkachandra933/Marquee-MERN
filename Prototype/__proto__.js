let str = "Anushka";
/**
 * this function is used to reverse the given string
 * @returns 
 */
String().__proto__.reverse = function(){
    return this.split("").reverse().join("");
}

String().__proto__.transform = function (separator){
    return this.split("").join(separator);
}

console.log("anushka".transform("#"));
console.log("anu".reverse());