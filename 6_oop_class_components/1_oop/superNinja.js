//Laura V. Bullock - 9/21/2021 - Super Ninja Assignment

//Create a Ninja class
class Ninja {

    constructor(name, health, speed=3, strength=3) {

        this.name = name;               //add an attribute: name
        this.health = health;           // add an attribute: health
        this.speed = speed;             // add a attribute: speed - give a default value of 3
        this.strength = strength;       // add a attribute: strength - give a default value of 3
    }

    //add a method: sayName() - This should log that Ninja's name to the console
    sayName(){
        this.name;
    }

    //add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats(){
        console.log("Name:  " + this.name + "\nStrength:  " + this.strength + "\nSpeed:  " + this.speed + "\nHealth:  " + this.health);
    }

    //add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake(){
        this.health += 10;
        console.log("\n" + "\x1b[43m" + "\x1b[30m" + this.name + "'s health has increased to " +  "\x1b[4m" + "\x1b[31m" + this.health + "\x1b[0m" + "\x1b[30m" + "\x1b[43m" + " after drinking sake." + "\x1b[0m" + "\n");
    }
}
//create a class Sensei that inherits from the Ninja class
class Sensei extends Ninja {
    constructor(wisdom = 10) {  //add an attribute: wisdom - default to 10
        super(wisdom);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
    }

    //create a method: speakWisdom()
    speakWisdom() {
        this.drinkSake()
        console.log("\x1b[0m" + superSensei.name + " speaks wisdom..." + "\x1b[44m" + "\x1b[37m" + "\x1b[1m" + "\n\t'What one programmer can do in one month, two programmers can do in two months.'" + "\x1b[0m")
    }
}

console.log("\n*********NINJAS*********\n")
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const ninja2 = new Ninja("Elektra", 1000);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();

console.log("*********SENSEI*********\n")
const superSensei = new Sensei("Master Shifu");
superSensei.showStats();
superSensei.speakWisdom();
