const arr = []; //initialize with empty array
function createArray(){
    return { //return object
        push : function push(val){ //key:push , val:fun
        arr.push(val);
        },

        getElement: function getElement(index){ //key: getElement, val:fun
            if(index >= 0 && index < arr.length){
                return arr[index];
            }else{ //index is not valid
               return "Error: Element NOT FOUND"
            }
            
        },

        getArray: function getArray(){ //key: getArray, val:fun
            return arr;
        }
    };
};

const myArray = createArray();
myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(50);
console.log(myArray.getElement(1));
console.log(myArray.getElement(10));
console.log(myArray.getArray());