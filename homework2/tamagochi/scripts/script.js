 function Tamagochi(name) {
     this.name = name;
     this.stillAlive = true;
     this.health = 100;
     this.happines = 100;
     this.hunger = 0;
     this.sleep = 0;
     this.money = 200;
     this.clean = 100;
 }
 Tamagochi.prototype.standartModificators = function() {
     this.hunger += Math.floor(Math.random() * (5 - 1 + 1)) + 1;
     this.happines -= Math.floor(Math.random() * (4 - 1 + 1)) + 1;
     this.clean -= Math.floor(Math.random() * (5 - 3 + 1)) + 3;
     this.money += Math.floor(Math.random() * (2 - 1 + 1)) + 1;
     this.sleep += Math.floor(Math.random() * (8 - 2 + 1)) + 2;

 };
 Tamagochi.prototype.checkHunger = function() {
     let counter = 0;
     if (this.hunger > 70) {
         alert("hungry");
         this.happines -= Math.floor(Math.random() * (8 - 5 + 1)) + 5;
         this.health -= Math.floor(Math.random() * (3 - 1 + 1)) + 1;
     } else if (this.hunger > 90) {
         alert("very hungry");
         this.happines -= Math.floor(Math.random() * (9 - 7 + 1)) + 7;
         this.health -= Math.floor(Math.random() * (5 - 2 + 1)) + 2;
     } else if (this.hunger >= 100) {
         this.hunger = 100;
         counter++;
         this.health -= Math.floor(Math.random() * (5 - 2 + 1)) + 2;
         if (counter >= 3) {
             this.stillAlive = false;
             counter = 0;
         }
     }

 };
 Tamagochi.prototype.checkClean = function() {
     if (this.clean < 40) {
         alert("need cleaning");
         this.happines -= Math.floor(Math.random() * (8 - 5 + 1)) + 5;
     } else if (this.clean <= 0) {
         this.clean = 0;
         this.happines -= Math.floor(Math.random() * (10 - 7 + 1)) + 7;
     }
 };
 Tamagochi.prototype.checkSleep = function() {
     if (this.sleep > 70) {
         alert("need to sleep");
         this.happines -= Math.floor(Math.random() * (8 - 5 + 1)) + 5;

     } else if (this.sleep >= 100) {
         this.sleep = 100;
         this.happines -= Math.floor(Math.random() * (10 - 7 + 1)) + 7;
     }
 }
 Tamagochi.prototype.feed = function(food, type) {
     for (key in food) {
         if (key == type) {
             this.hunger -= food[key];
             this.happines += Math.floor(Math.random() * (4 - 2 + 1)) + 2;
             this.clean -= Math.floor(Math.random() * (5 - 3 + 1)) + 3;
         }
     }

 };

 Tamagochi.prototype.playGames = function(games, type) {
     for (key in games) {
         if (key == type) {
             this.happines += games[key];
             this.money += Math.floor(Math.random() * (10 - 7 + 1)) + 7;

         }
     }
 };
 Tamagochi.prototype.cleaning = function() {
     this.clean = 100;
     this.happines += Math.floor(Math.random() * (4 - 2 + 1)) + 2;
 }
 Tamagochi.prototype.sleeping = function() {
     this.sleep = 0;
     this.happines += Math.floor(Math.random() * (4 - 2 + 1)) + 2;
 };
 let food = {
     apple: 10,
     cookie: 12,
     cake: 22,
     burger: 20,
 };
 let games = {
     ball: 15,
     kite: 10,
     plane: 20,
 };
 let stats = {
     health: document.getElementById("health"),
     happines: document.getElementById("happines"),
     hunger: document.getElementById("hunger"),
     sleep: document.getElementById("sleep"),
     money: document.getElementById("money"),
     clean: document.getElementById("clean"),
 }
 let buttons = {
     feed: document.getElementById("feed"),
     play: document.getElementById("play"),
     clean: document.getElementById("cleaning"),
     sleep: document.getElementById("sleeping"),
     start: document.getElementById("start"),
 };

 function update() {

 }
 buttons.start.addEventListener('click', function() {
     let myPet = new Tamagochi("alf");

     stats.health.value = myPet.health;
     stats.happines.value = myPet.happines;
     stats.hunger.value = myPet.hunger;
     stats.sleep.value = myPet.sleep;
     stats.money.value = myPet.money;
     stats.clean.value = myPet.clean;

     let Stats = setInterval(() => {
         myPet.standartModificators();
         myPet.checkHunger();
         myPet.checkClean();
         myPet.checkSleep();
         stats.health.value = myPet.health;
         stats.happines.value = myPet.happines;
         stats.hunger.value = myPet.hunger;
         stats.sleep.value = myPet.sleep;
         stats.money.value = myPet.money;
         stats.clean.value = myPet.clean;

     }, 10000);

     buttons.clean.addEventListener('click', function() {
         myPet.cleaning();
     });
     buttons.sleep.addEventListener('click', function() {
         myPet.sleeping();
     });
     buttons.feed.addEventListener('click', function() {
         let typeOfFood = document.getElementsByName('food');
         typeOfFood.forEach((type) => {
             console.log(type);
             if (type.checked) {
                 myPet.feed(food, type.value);
                 console.log(type.value);
             }
         })

     });
     buttons.play.addEventListener('click', function() {
         let typeOfGame = document.getElementsByName("game");
         typeOfGame.forEach((type) => {
             if (type.checked) {
                 myPet.playGames(games, type.value);
                 console.log(type.value);
             }
         });
     })
 });