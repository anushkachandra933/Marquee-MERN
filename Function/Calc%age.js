const marks = [95,78,90,78,59]

function calculatePercentage(marks){
    const totalMarks = marks.reduce((total,marks)=>{
        return total+marks;
    },0);
    return totalMarks/5;
}

console.log(calculatePercentage(marks));