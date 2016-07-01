class Player {
  playTurn(warrior) {
  
    if (warrior.feel().isEmpty()) {
      warrior.walk();
    } else if (warrior.health() < 10) {
      warrior.rest();
    } else {
      warrior.attack();
    }
    
  }
}
