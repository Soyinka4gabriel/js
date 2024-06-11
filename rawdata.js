// arrays

const grades = [87,45, 67,50,75,45,89,99,58,98,67];
let gradesSum = 0;

for (i=0; i<grades.length; i++){
    gradesSum += grades[i];
}

console.log(`avrage of ${grades} and ${gradesSum}`, gradesSum/grades.length);
console.log( gradesSum/grades.length);


// set
const house1 = "Red";
const house2= "Blue";
const house3 = "Black";
const house4 = "Black";

const house = new Set();
house.add(house1).add(house2).add(house3).add(house4);

console.log(house)