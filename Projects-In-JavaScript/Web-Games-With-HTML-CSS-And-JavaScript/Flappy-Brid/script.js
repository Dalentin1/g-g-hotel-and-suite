var hole = document.getElementById("hole");
var game = document.getElementById("game");
// so we need the hole to placed at random places in the block as the animation takes places
// we're going to create a function that would change the location of the hole every time see syntax below

hole.addEventListener("animationiteration", RanHole);
function RanHole() {
  var random = -(Math.random() * 350 + 150);
  hole.style.top = random + "px";
  score++;
}
// created a variable the used the minus - operator the the Math() method followed by the random() method then * by 350
// what this means is it would take any random number between 0 and 350
// then it would add 150 to that random number
// then the minus - operator in front changes the whole random value gotten to a negative number
// the Math is a predefined intrinsic object in javaScript what it does is it provides basic mathematics functionality and constants.
// the Math.random() method returns a pseudorandom number between 0 and 1.
// added the score variable with increament to increase users score by number of obstruction passed

// now with done we would look at some tasks we want to be performed in the game
// game would be over when the avatar hit or strucks any of the obstructions or either the avatar falls to the bottom of the game box
// on game over the score would be shown on the screen with a restart button
// the score would be counted by the obstructions passed by the avatar, the number of obstruction passed would be the final score
// so we create a variable score and increase it's value by the number of random obstruction passed by the avatar see statement below
// we also took another variable for the avatar to jump
// and access the id elements in the html file
// we now have to create a function for the avatar to fall and mention the conditions for game over as well see statement below

var score = 0;
var jumping = 0;
var result = document.getElementById("result");
var text = document.getElementById("text");

// creating a function
var fall = setInterval(function () {
  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (jumping == 0) {
    bird.style.top = birdTop + 2 + "px";
  }
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  var hTop = 500 + holeTop;
  if (birdTop > 450 || (blockLeft < 50 && blockLeft > -50 && (birdTop < hTop || birdTop > hTop + 100))
  ) {
    result.style.display = "block";
    text.innerText = `Your final score is : ${score}`;
    game.style.display = "none";
    score = 0;
  }
}, 10);

// the statement above we invoked a variable fall then used a predefine function in JavaScript setInterval
// then passed a function to it as an arugment
// in the function we took a variable birdTop then used the parseInt function to change whatever digit we get to numbers when passed to the variable
// then used the window object then the getComputedStyle() method
// what the getComputedStyle() method does is it get the html element style
// the used the getPropertyValue() method to get a property from the selected html element
// then in the if condition statement we stated a condition if the variable jumping is equals to 0
// then we want the html element style property to be add 2px every 10sec
// then decleared a variable blockLeft then used the window object and the getComputedStyle() method to get the style of the selected html element then used the getPropertyValue() method to get the style property selected
// the next variable does the same
// then what the next variable hTop does is it adds 500 to the value of the variable holeTop
// then the if condition states that if birdtop is greater than 450 meaning the avatar is touching the ground of the game box
// or if the blockLeft variable is less than 50 and greater than -50 means the avatar is touching any of the obstructions
// and the birdTop is less than hTop meaning the avatar is hitting the roof of the game comtainer
// or colides at the upper part of the block
// then the game would be over and the result box would appear followed with your score
// the game container would then be hidden, score would go to 0 if the user restarts the game
// 

// creating a function for keys to move the avatat see statement below
window.addEventListener("keydown", hop);

function hop() {
  jumping = 2;
  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (birdTop > 10) {
    bird.style.top = birdTop - 60 + "px";
  }
  setTimeout(function () {
    jumping = 0;
  }, 100);
}

// the statement above is easy we decleared an event listener for the key down and the hop function
// the created a function hop in it decleared the variable jumping to be 1, so everytime a key is pressed the jhop function is called an the jumping variable changes to 1
// then invoked a local variable birdTop and got the style property of the html element bird
// then the if condition statement states that
// if the variable birdTop is greater than 6 then it would subtract 60 from the birdTop style property
// the setTimeout function takes the avatar down every 1msec but it would raise to 60px with every button clicked
