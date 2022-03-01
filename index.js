var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage="dice" + randomNumber1 +".png";

var randomImageSource = "images/" + randomDiceImage;

 var image1 =document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomImageSource);

 var randomNuber2= Math.floor(Math.random()*6)+1;

 var randomImageSource2 = "images/dice" + randomNuber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//if player 1 wins
if(randomNumber1 > randomNuber2){
  document.querySelector("h1").innerHTML = "Play 1 wins!";
}
else if(randomNuber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
