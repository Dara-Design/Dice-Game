var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var resultText = null;

//document.getElementById('imageBox').src = "img/apple_" + total + ".png";
document.querySelector("img.img1").src= "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img2").src= "images/dice" + randomNumber2 + ".png";



if( randomNumber1 > randomNumber2){
  resultText = "🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2)
{
  resultText = "🚩 Player 2 wins!";
}
else {
  resultText = "Draw!";
}

document.querySelector('h1').innerHTML = resultText;
