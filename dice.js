var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;
document.querySelector(".container .dice .img1").setAttribute("src","images/dice"+p1+".png");
document.querySelector(".container .dice .img2").setAttribute("src","images/dice"+p2+".png");
var msg=document.querySelector("h1").textContent;
if(p1>p2)
{document.querySelector("h1").textContent="🎉Player 1 Wins🎉";}
else if (p1<p2)
{document.querySelector("h1").textContent="🎉Player 2 Wins🎉";}
else
{document.querySelector("h1").textContent="Draw!";}
