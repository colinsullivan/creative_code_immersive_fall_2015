/**
 * These are the possible moves that can be played in the game of rock, paper,
 * scissors.
 **/
var possible_moves =  ["rock", "paper", "scissors"];

/**
 * Based on those possible moves, lets set up some rules so we know who
 * wins or loses.
 **/
var rules = {
  /**
   * For example, a rock beats scissors but is beaten by paper.  Note how that
   * is encoded in this JavaScript object.
   **/
  "rock": {
    "beats": "scissors",
    "beatenBy": "paper"
  },
  "paper": {
    "beats": "rock",
    "beatenBy": "scissors"
  },
  "scissors": {
    "beats": "paper",
    "beatenBy": "rock"
  }
};

/**
 * Now to determine a winner, we just need to look up the result in our rules
 * above.  In the following example, to see what scissors beats, we use
 * `rules.scissors.beats`, essentially traversing the `rules` object.
 **/
console.log("What does scissors beat?  Answer: `rules.scissors.beats`: " + rules.scissors.beats);

function play () {
  console.log("play");
  
  /**
   * First, lets grab the move that the user typed into the box.  Lets use
   * jQuery to select the element, then call the "val" method to get
   * the current value of the text box.  The `toLowerCase` just converts the
   * string to lower case, in case the user typed any uppercase characters.
   **/
  var user_move = $("#user-input").val().toLowerCase();

 
  /**
   *  Now, the computer makes its move.  We just choose a random element
   *  in the `possible_moves` array (see above).
   **/ 
  var i = Math.floor(Math.random() * 3);
  var computer_move = possible_moves[i];

  console.log("user_move", user_move);
  console.log("computer_move", computer_move);

  /**
   *  Here we will determine the outcome using the rules set up above.
   **/  
  var winner;

  // get the rules for the user's move.  Note we use the brackets syntax here,
  // if the user_move happens to be "scissors", then this is the same as
  // rules.scissors or rules["scissors"].
  var rulesForUsersMove = rules[user_move];

  // now rulesForUsersMove tells us if the user has won or not, based on
  // the computer's move
  if (rulesForUsersMove.beats === computer_move) {
    winner = "user";
  } else if (rulesForUsersMove.beatenBy === computer_move) {
    winner = "computer";
  } else {
    // the only remaining possibility is a draw
    winner = "draw";
  }

  console.log("winner: " + winner);

  /**
   *  Now that we know the winner, we can draw the results on the webpage.
   **/
 
  /**
   *  First, lets just write some nice text explaining what happened
   **/ 
  var outcome_div = document.getElementById("outcome");
  if (winner === "user") {
    outcome_div.innerHTML = "The user wins!";
  } else if (winner === "computer") {
    outcome_div.innerHTML = "The computer wins!";
  } else {
    outcome_div.innerHTML = "It was a draw!";
  }

  var computermove_div = document.getElementById("computermove");
  computermove_div.innerHTML = "The computer chose " + computer_move;

  /**
   *  If anything at all, we will definitely reset all of the icons to
   *  black.
   **/

  $("#rock").velocity({
    fill: "#000"
  });
  $("#paper").velocity({
    fill: "#000"
  });
  $("#scissors").velocity({
    fill: "#000"
  });

  /**
   * If it was a draw, we are done!
   **/
  if (winner === "draw") {
    // return just stops the `play` function.  Nothing below will run.
    return;
  }

  /**
   *  If we got here, the user won or lost, lets do some animations to 
   *  show them.
   **/

  /**
   * Now get the icon represents the user's choice using jQuery.
   **/
  var user_move_icon = $("#" + user_move);
  
  /**
   *  Rotate it back and forth
   **/
  user_move_icon.velocity({
    rotateZ: 360
  }).velocity("reverse", {delay: 250});

  /**
   * Depending on if the user won or lost, color it red or green accordingly.
   **/
  if (winner === "user") {
    user_move_icon.velocity({
      fillGreen: 255
    });
  } else {
    user_move_icon.velocity({
      fillRed: 255
    });
  }
}
