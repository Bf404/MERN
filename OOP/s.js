class Card{
    constructor (name, cost){
        
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        console.log(target.name , " Has been attacked ", target.name);
        target.resilience -= this.power;
        
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitute = magnitude;
    }
    play ( target ){
        if (target instanceof Unit) {
            console.log(this.text);
            console.log(this.name + " has been aplied to "+ target.name);
        }
        if (this.stat == 'resilience'){
            target.resilience += this.magnitute;
        }
        else{
            target.power += this.magnitute;
        }
    }
}
RBN_unit = new Unit("Red Belt Ninja", 3, 3, 4);
BBN_unit = new Unit("Black Belt Ninja ", 4, 5, 4);

HA_effect = new Effect("Hard Algorithm", 2, "increase targets resilence by 3", "Reselience", 3);
UPR_effect = new Effect("Unhealed Promice Rejection", 1, "reduce target's resilence by 2", "Resilence", -2);
PP_effect = new Effect("Pair Programming", 3, "increase target power by 2", "Power", 2);

console.log(RBN_unit.resilience);
HA_effect.play(RBN_unit);

console.log(RBN_unit.resilience);
UPR_effect.play(RBN_unit);

console.log(RBN_unit.resilience);
PP_effect.play(RBN_unit);

console.log(RBN_unit.resilience);
RBN_unit.attack(BBN_unit);