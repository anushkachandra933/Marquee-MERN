//print odd numbers from 1 to 15
function printEven(range){
    for(let i=1; i<=15; i++){
        if(i% 2 != 0){
            console.log(i+" ");
        }
    }
}


//print multiplication table of number
function printTable(num){
    for(let i=1; i<=10; i++){
        console.log(`${num}*${i} = ${num * i}`);
    }
}

//sum of numbers till n
function sum(n){
    let sum = 0;
    for(i = 0; i<=n; i++){
        sum += i;
    }
    return sum;
}

//numbers that are divisible by 3 and 5
function divisibleBy(){
    for(i = 1; i<=15; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(i+" ");
        }
    }
}

//numbers that are not divisible by 3 and 5
function notDivisibleBy(){
    for(let i=1;i <= 30; i++){
        if(i % 3 != 0 && i % 5 != 0){
            console.log(i+" ");
        }
    }
}

