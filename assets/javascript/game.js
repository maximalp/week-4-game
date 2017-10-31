

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("RandomInt");
var targetNumber = getRandomInt (18,120); //TODO



$("#number-to-guess").text(targetNumber);


var totalNum = 0;

var counter = 0;
var wins = 0;
var losses = 0;

var crystal1 = getRandomInt(1,12);
var crystal2 = getRandomInt(1,12);
var crystal3 = getRandomInt(1,12);
var crystal4 = getRandomInt(1,12);

var numberOptions = [crystal1, crystal2, crystal3, crystal4];


// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "./assets/images/crystal" + (i + 1) + ".jpg");
  imageCrystal.attr("id","crystal" + (i + 1));


  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  imageCrystal.attr("height", "100");
  imageCrystal.attr("width", "100");

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}




$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  console.log("counter " + counter);
  // All of the same game win-lose logic applies. So the rest remains unchanged.

  $("#total-score").text("Your current score is: " + counter);

  if (counter === targetNumber) {
    wins++;
    $("#wins").text("Your wins: " + wins);
    $("#status").text("You win! ");
console.log(" in win");
  startNewGame();
  }

  else if (counter >= targetNumber) {
    losses++;
    $("#losses").text("Your losses: " + losses);
    $("#status").text("You lost! ");
    console.log("in lost");
  startNewGame();
  }


});

function startNewGame ()
{
console.log("in new function");
counter = 0;
$("#total-score").text("Your current score is: " + counter);


var crystal1 = getRandomInt(1,12);
var crystal2 = getRandomInt(1,12);
var crystal3 = getRandomInt(1,12);
var crystal4 = getRandomInt(1,12);

targetNumber = getRandomInt (18,120);
$("#number-to-guess").text(targetNumber);

console.log("new game target num: " + targetNumber);

$("#crystal1").attr("data-crystalvalue", crystal1);
$("#crystal2").attr("data-crystalvalue", crystal2);
$("#crystal3").attr("data-crystalvalue", crystal3);
$("#crystal4").attr("data-crystalvalue", crystal4);

};
