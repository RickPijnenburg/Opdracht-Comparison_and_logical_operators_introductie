const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram";
const totalAmount = 10;

if (age >= 18) {
    console.log("Persoon mag naar binnen!");
} else {
    console.log("Persoon mag niet naar binnen!");
}

if (isFemale){
    console.log("Persoon is een vrouw en mag naar binnen!");
} else {
    console.log("Persoon is geen vrouw en mag niet naar binnen!");
}

if(driverStatus === 'bob'){
    console.log("Persoon mag naar huis rijden!");
} else {
    console.log("Persoon mag niet naar huis rijden!");
}

if(age >= 18 && age <=25){
    console.log("Je krijgt 50% korting!");
} else{
    console.log("Je krijgt helaas geen korting!");
}

if(firstName === "Bram" || firstName === "Sarah"){
    console.log("Je krijgt een gratis biertje!");
} else {
    console.log("Je krijgt geen gratis biertje!");
}

if(totalAmount >= 100){
    console.log("Je krijgt gratis een flesje champange!");
} else if(totalAmount > 50){
    console.log("Je krijgt gratis een portie nachos!");
} else if(totalAmount > 25){
    console.log("Je krijgt gratis (vega)bitterballen!");
} else  {
    console.log("Helaas je krijgt niets extra!");
}