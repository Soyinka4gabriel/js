const car = {
    engine: true
}
const sportCar = Object.create(car);
sportCar.speed= "Fast";
for(i in sportCar){
    console.log("Hmmmm ", i);
}

for(i of Object.keys(sportCar)){
    console.log("Well ", i)
    console.log("Well ", sportCar[i])
    console.log("Well ", i +": "+ sportCar[i])
}

let num = [22,33,44,55,66,11];
console.log(num.length);
for(i in Object.keys(num)){
    console.log(num[i]);
}

console.log("Let try for loop")
for (i=0; i<num.length; i++){
    console.log(num[i])
}