var n=Math.random();
var randomNumber=Math.floor(n*6)+1;
document.querySelector(".img1").setAttribute("src","Dicee Challenge - Starting Files/images/dice"+randomNumber+".png");
var n2=Math.random();
var randomNumber2=Math.floor(n2*6)+1;
document.querySelector(".img2").setAttribute("src","Dicee Challenge - Starting Files/images/dice"+randomNumber2+".png");
if(randomNumber>randomNumber2){
    document.querySelector(".container h1").textContent="🎊Player 1 wins!";
}
else if(randomNumber2>randomNumber){
    document.querySelector(".container h1").textContent="Player 2 wins!🎊";
}
else{
    document.querySelector(".container h1").textContent="Draw";
}