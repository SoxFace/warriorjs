const MINHEALTH = 8
const RESTED = 14

class Player {
  restOrWalk(warrior) {
    let rested = (warrior.health() >= MINHEALTH) ? true : false;

    if (rested === true) {
      warrior.walk();
    } else {
      warrior.rest();
    }
  }

  playTurn(warrior) {
    if (warrior.feel().isEnemy()) {
      warrior.attack();
    } else {
      this.restOrWalk(warrior);
    }
  }
}

global.Player = Player;

/*
> = Stairs
@ = Warrior (20 HP)
s = Sludge (12 HP)
S = Thick Sludge (24 HP)
C = Captive (1 HP)
*/