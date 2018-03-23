/* Example output
Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.  
*/

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    //Who attacks and who defends changes with each iteration
    let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
    let defender = attacker === fighter1 ? fighter2 : fighter1;

    //Loop through attacks until one fighter's health is less than zero
    for (let i = 0; i <= (fighter1.health + fighter2.health); i++) { //should i be using a while loop?
        if (defender.health < 0) {
            console.log(`${attacker} attacks ${defender}; ${defender} now has -1 health and is dead. ${attacker} wins.`);
            break;
        } else {
            //Subtract damage from defender's health
            defender.health -= attacker.damagePerAttack;
            //Print the attack to the console
            console.log(`${attacker} attacks ${defender}; ${defender} now has ${defender.health} health.`);
            //Change the attacker
            attacker = defender;
        }
    }
    //Return the winner's name
    return attacker.name + " wins.";
  }
  
  const Bob = Fighter("Bob", 10, 2);
  const Betty = Fighter("Betty", 12, 3);
  declareWinner(Bob, Betty, Bob);
  
  // Ideas
  // If the winner function were recursive, I could randomly assign who is attacking who rather than simply going back and forth. Not sure I'd really want to do that.
  
  