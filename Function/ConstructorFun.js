//constructor function
function Dog(name,breed,age,weightinKgs){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightinKgs = weightinKgs;

    this.eat = function(){
        console.log("Chomp!");
    }

    this.bark = function(){
        console.log("Woof!");
    }
}

const dogTheMarley = new Dog("Marley","Pit",3,30);
console.log(dogTheMarley);