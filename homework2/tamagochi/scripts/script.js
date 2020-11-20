  let Tamagochi = function(name) {
      this.name = name;
      this.stillAlive = true;
      this.health = 100;
      this.happines = 100;
      this.hungry = 0;
      this.sleep = 0;
      this.money = 200;
      this.clean = 100;
  }
  Tamagochi.prototype.standartModificators = function() {
      this.hungry += Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      this.happines -= Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.clean -= Math.floor(Math.random() * (5 - 3 + 1)) + 3;
      this.money += Math.floor(Math.random() * (10 - 7 + 1)) + 7;
      this.sleep += Math.floor(Math.random() * (8 - 2 + 1)) + 2;
      console.log(this);
  };
  Tamagochi.prototype.checkHunger = function() {
      let counter = 0;
      if (this.hungry > 70) {
          console.log("hungry");
          this.happines -= Math.floor(Math.random() * (8 - 5 + 1)) + 5;
          this.health -= Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      } else if (this.hungry > 90) {
          console.log("very hungry");
          this.happines -= Math.floor(Math.random() * (9 - 7 + 1)) + 7;
          this.health -= Math.floor(Math.random() * (5 - 2 + 1)) + 2;
      } else if (this.hungry >= 100) {
          this.hungry = 100;
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
      }
  };

  Tamagochi.prototype.feed = function(food, type) {
      for (key in food) {
          if (key == type) {
              this.hungry -= food[key];
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
  Tamagochi.prototype.clean = function() {
      this.clean = 100;
      this.happines += Math.floor(Math.random() * (4 - 2 + 1)) + 2;
  }
  let food = {
      apple: 2,
      cookie: 1,
      cake: 5,
      burger: 4,
  };
  let games = {
      ball: 2,
      kite: 1,
      plane: 5,
  }