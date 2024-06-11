const top4=["Lagos", "Oyo", "Ibadan", "Abuja"];

function showPlaces(place1,place2,place3, place4){
    console.log("Visit", place1);
    console.log("The visit", place2);
    console.log("The visit", place3);
    console.log("Finish with a visit to ", place4);
}
console.log(`"Blow is the normal way using array"
`);

showPlaces(top4[0],top4[1],top4[2],top4[3]);
console.log(`"Blow is using the spreed oprator"
`);
showPlaces(...top4)
console.log(`
this just to show the value in top4 array`)
console.log(...top4)