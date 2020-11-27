let Tamagochi = function() {

    let hunger = 50;
    let food = "screw";
    this.getHunger = function() {
        return hunger;
    }
    this.feed = function(type) {
        type.forEach(element => {
            if (element.includes(food)) {
                console.log("wrong food");
            } else {
                hunger -= 5;
                console.log(hunger);
            }
        });

    }

}
let typeOfFood = ["apple", "screw", "cookie"];
let pet = new Tamagochi();
pet.feed(typeOfFood);
console.log("hunger:", pet.getHunger());