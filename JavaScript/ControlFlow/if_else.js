//question 1
function checkEvenOrOdd(num){
    if(num % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}


//question 2
function isAdminOrNot(value){
    if(value === true){
        console.log("access allowed");
    }else{
        console.log("access denied");
    }
}


//question 3
function canVote(age){
    if(age >= 18 && age < 100){
        console.log("can Vote");
    }else{
        console.log("can't vote");
    }
}


//question 4
function canDrive(age,haveLicense){
    if(age >= 18 ){
        if(haveLicense === true){
            console.log("Can drive");
        }else{
            console.log("can't drive");
        }
    }else{
        console.log("can't drive");
    }
}


//question 5
function checkWeekDay(weekValue){
    if(weekDay == 1){
        console.log("Monday");
    }else if(weekDay == 2){
        console.log("Tuesday");
    }else if(weekDay == 3){
        console.log("Wednesday");
    }else if(weekDay == 4){
        console.log("Thursday");
    }else if(weekDay == 5){
        console.log("Friday");
    }else if(weekDay == 6){
        console.log("Saturday");
    }else{
        console.log("Sunday");
    }
}


//question 6
function printEven(range){
    for(let i=1; i<=30; i++){
        if(i% 2 == 0){
            console.log(i);
        }
    }
}


//question 7
function printTable(num){
    for(let i=1; i<=10; i++){
        console.log(`${num}*${i} = ${num * i}`);
    }
}

//question 8
function getGrade(marks){
    if(marks>= 90 && marks <= 100){
        return "A+";
    }else if(marks >= 80 && marks <= 89){
        return "A";
    }else if(mark >= 70 && marks <= 79){
        return "B";
    }else if(marks >= 60 && marks <= 69){
        return "C";
    }else if(marks >= 33 && marks <= 59){
        return "D";
    }else{
        return "Fail";
    }
}

//rock-paper-scissor game
function whoWins(user,computer){
    if((user == "r" && computer == "s") || (user == "p" && computer == "r") || (user == "s" && computer == "p")){
        console.log("user wins!!");
    }else if((user == "r" && computer == "p") || (user == "s" && computer == "r") || (user == "p" && computer == "s")){
        console.log("computer wins!!");
    }else{
        console.log("Invalid choice!!");
    }
}

whoWins("m","s");