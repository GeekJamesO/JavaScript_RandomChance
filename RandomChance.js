/*
Random Chance
Let's play the slots!

  Make a function that takes a number of quarters (1 quarter = 1 game).
  There is a 1 in 100 chance to win the slot machine (which will give you
  between 50 - 100 quarters -- use Math.random and Math.floor to pick a random
  number of coins).
  While the user still has quarters, use Math.random to determine if they won.

  If they ever win, return the number of quarters (ex: they had 50 remaining
  quarters and won 90, so it should return 140).

  Return 0 if all the quarters were wasted.

Bonus (Only If You Have Time):
  Let the user pass the number they are willing to leave with
  (ex: If they won the lottery and still have 40 coins, they will keep
  playing until they have collected 200 coins)
*/

function playSlots(inputCoins, StopAt ) {
  var winnings = 0;
  var leverPulls = 0;
  if (StopAt===undefined )
  {
    for (leverPulls = 0; leverPulls < inputCoins; leverPulls++) {
      var rndValue = Math.floor(Math.random() * 100); //Values 0 to 99
      if (rndValue == 70 ){
        winnings += (51 + Math.floor((Math.random() * 50)));
      }
    }
  }
  else {
    console.log("StopAt is defined as :" + StopAt);
    winnings = inputCoins;
    while(winnings > 0 && winnings < StopAt) {
      leverPulls += 1;
      var rndValue = Math.floor(Math.random() * 100); //Values 0 to 99
      if (rndValue == 70 ){
        winnings += (51 + Math.floor((Math.random() * 50)));
      }
    }
  }
  console.log("After " + leverPulls + " pulls, you have won " + winnings );
  return winnings;
}

  playSlots(500);
  playSlots(500, 800);
