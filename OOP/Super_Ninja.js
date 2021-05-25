class Ninja{
    constructor(name, health = 0, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength= strength;
    }
    sayName(){
        console.log(this.name);
    }
    
    showStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("strength: " + this.strength);

        
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom = 10){
        super(name,health= 200,speed= 10, strength = 10);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
