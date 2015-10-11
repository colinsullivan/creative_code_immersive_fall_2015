/**
 *  @file       scripts.js
 *
 *  @desc       This file contains the main functionality for the rock paper
 *              scissors example.
 **/

/**
 *  First, lets set up some variables that will not change, I've put their
 *  names in all uppercase letters to indicate this.
 **/

/**
 * These are the possible moves that can be played in the game of rock, paper,
 * scissors.
 **/
var POSSIBLE_MOVES =  ["rock", "paper", "scissors"];

/**
 * Based on those possible moves, lets set up some RULES so we know who
 * wins or loses.
 **/
var RULES = {
  /**
   * For example, a rock beats scissors but is beaten by paper.  Note how this
   * rule is encoded in the JavaScript object below.
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
 * Now to determine a winner, we just need to look up the result in our RULES
 * above.  In the following example, to see what scissors beats, we use
 * `RULES.scissors.beats`, essentially traversing the `RULES` object.
 **/
console.log("What does scissors beat?  Answer: `RULES.scissors.beats`: " + RULES.scissors.beats);


/**
 *  This function gets called directly from the HTML code when the "Play"
 *  button is clicked.  We expect that the user has entered either "rock", 
 *  "paper" or "scissors" into the text box before clicking "Play".
 **/
function play () {
  console.log("play");
  
  /**
   * First, lets grab the text that the user typed into the box to indicate
   * their move.  Lets use jQuery to select the element, then call the "val"
   * method to get the current value of the text box.  The `toLowerCase` just
   * converts the string to lower case, in case the user typed any uppercase
   * characters.  For more info on jQuery selectors, check out the
   * "Using jQuery Core" section of the jQuery Learning Center:
   *
   *    http://learn.jquery.com/using-jquery-core/
   **/
  var user_move = $("#user-input").val().toLowerCase();
 
  /**
   *  Now, the computer makes its move.  We just choose a random element
   *  in the `POSSIBLE_MOVES` array (defined above).
   **/ 
  var i = Math.floor(Math.random() * POSSIBLE_MOVES.length);
  var computer_move = POSSIBLE_MOVES[i];

  console.log("user_move", user_move);
  console.log("computer_move", computer_move);

  /**
   *  Here we will determine the outcome using the RULES set up above.
   **/  
  var winner;

  /**
   * get the RULES for the user's move.  Note we use the brackets syntax here,
   * if the user_move happens to be "scissors", then this is the same as
   * RULES.scissors or RULES["scissors"].
   **/
  var rulesForUsersMove = RULES[user_move];

  /**
   * now the rulesForUsersMove object tells us if the user has won or not, based on
   * the computer's move
   **/
  if (rulesForUsersMove.beats === computer_move) {
    winner = "user";
  } else if (rulesForUsersMove.beatenBy === computer_move) {
    winner = "computer";
  } else {
    // the only remaining possibility is a draw
    winner = "draw";
  }

  /**
   *  Now that we know the winner, we can print in the console, and then draw
   *  the results on the webpage.
   **/
  console.log("winner: " + winner);
 
  /**
   *  First, lets just write some nice text explaining what happened.  First
   *  we get the div with id="outcome" then we put text inside it, using the
   *  `html` method.
   **/ 
  var outcome_div = $("#outcome");
  if (winner === "user") {
    outcome_div.html("The user wins!");
  } else if (winner === "computer") {
    outcome_div.html("The computer wins!");
  } else {
    outcome_div.html("It was a draw!");
  }

  var computermove_div = $("#computermove");
  computermove_div.html("The computer chose " + computer_move);

  /**
   *  We will definitely reset all of the icons to black, this will happen
   *  no matter what.
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
   * If it was a draw, we are done!  We just set all the icons to black
   * and that's it!
   **/
  if (winner === "draw") {
    // return just stops the `play` function.  Nothing below will run.
    return;
  }

  /**
   *  If we got here, the user won or lost, lets do some animations.
   **/

  /**
   * Now get the icon represents the user's choice using jQuery.  Note if
   * the user_move was "scissors", this jQuery selector will be:
   * 
   *    $("#scissors")
   *
   * which will get the scissors svg element from the HTML.
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

  /**
   *  And we're done!
   **/
}
