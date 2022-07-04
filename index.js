window.onload = randomPic();

function randomPic(){
  var pics = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

  var randomNum1 = Math.floor(Math.random() * pics.length);
  var randomNum2 = Math.floor(Math.random() * pics.length);
  console.log(randomNum1);
  console.log(randomNum2);
  document.getElementById("img1").src = pics[randomNum1];
  document.getElementById("img2").src = pics[randomNum2];

  if(randomNum1 > randomNum2){
    document.getElementById("champ").innerHTML = "Player 1 Wins!";
  }
  else if(randomNum2 > randomNum1){
    document.getElementById("champ").innerHTML = "Player 2 Wins!";
  }
  else {
    document.getElementById("champ").innerHTML = "WOW its a draw!!";
  }
}
