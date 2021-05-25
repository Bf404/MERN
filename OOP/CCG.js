class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  attack(target) {
      // console.log(this.name + " attacked "+ target.name)
      target.res -= this.power;
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit) {
      // implement card text here
      console.log(this.text);
      console.log(this.name + " applied to " + target.name )
      if(this.stat == 'res')
      {
          target.res += this.magnitude;
      }
      else 
      {
          target.power += this.magnitude;
      }

    } else {
      throw new Error("Target must be a unit!");
    }
  }
}


rb_inst = new Unit("Red Belt Ninja", 3, 3, 4);
bb_inst = new Unit("Black Belt Ninja", 4, 5, 4);

ha_inst = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", 'res', 3);
upr_inst = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
pp_inst = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

console.log(rb_inst.res)
ha_inst.play(rb_inst);
console.log(rb_inst.res)
upr_inst.play(rb_inst);
console.log(rb_inst.res)
pp_inst.play(rb_inst)
console.log(rb_inst.res)
rb_inst.attack(bb_inst)




