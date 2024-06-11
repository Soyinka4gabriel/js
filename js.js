console.log(2<=3);
console.log(30/4>>0);

var result= 50;
if (result > 49) {
    console.log("You pass the test");
}
else{
    console.log("You did not pass the test");
}


var food = "cool";

if (food == "hot"){
    console.log("Too hot");
}
else if (food == "cold"){
    console.log("Too cold");
}
else{
    console.log("Food is good");
}


var place= "1st";
switch(place){
    case "1st":
        console.log("Gold")
        break;
    case "2nd":
        console.log("Sliver")
        break;
    case "3rd":
        console.log("Bronze")
        break;
    default:
        console.log("No Medals")
}

function add(){
    var sum= 29 + 10;
    console.log(sum);
}
add();

console.log("am doing good");

function sub(){
    var sum= 19 + 10;
    return sum
}
console.log(sub())


var list = ["Bag", "Cap", "Cup", "Table", "Chair"];
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[4]);
console.log(list[5]);
for(var i=0; i<list.length; i++){
    console.log(list[i])
}

console.log("this is for while loop")
var i = 0;

console.log(list.pop([0]))
console.log(list.pop([0]))
console.log(list.pop([2]))
console.log("this is what we have after popping")
while (i<list.length) {
    console.log(list[i]);
    i++;
    
}

console.log("let try 2 weeks 5 days for each ")

for(var i =1; i<=2; i++){
    for( var j=1; j<=5; j++){
        console.log("Week  ",i, "  Day  ", j);
    }

}



