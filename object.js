var cal1= {
    price : 200,
    rate : 1.2,
    total: function total(){
        var cal=  this.price * this.rate;
        console.log(cal)
    }
}

cal1.total();

var cal2= {
    price : 100,
    rate : 1.2,
    total: function total(){
        var cal=  this.price * this.rate;
        return cal
    }
}

console.log(cal2.total())

cal2.name="Gabriel"

console.log(cal2.name)


var brid = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(brid);
console.log("Has wings", eagle1.hasWings);
console.log("Can fly", eagle1.canFly);
console.log("Has feathers", eagle1.hasFeathers);

var hen = Object.create(brid);
hen.canFly = false;
console.log("Has wings", hen);
console.log("Has wings", hen.hasWings);
console.log("Can fly", hen.canFly);
console.log("Has feathers", hen.hasFeathers);