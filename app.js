var mainnav = document.getElementsByClassName("mainnav")[0];
mainnav.style.backgroundColor = "black";
mainnav.style.width = "100%";
mainnav.style.color = "gray";
mainnav.style.padding = "0px";
mainnav.style.border = "0px";
mainnav.style.margin = "0px";
mainnav.style.textAlign = "center";



var footer = document.getElementsByClassName("footer")[0];
footer.style.backgroundColor = "gray";
footer.style.width = "100%";
footer.style.color = "black";
footer.style.position = "absolute";
footer.style.top = "400px";
footer.style.textAlign = "center";

var h1 = document.getElementsByTagName("h1")[0];
h1.style.margin = "0";
h1.style.padding = "0";


var squares = document.getElementsByClassName("square");

squares[0].style.backgroundColor = "aqua";
squares[1].style.backgroundColor = "teal";
squares[2].style.backgroundColor = "blue";


for (var i = 0; i < squares.length; i++) {
  squares[i].style.width = "33%";
  squares[i].style.height = "400px";
  squares[i].style.display = "inline-block";
  squares[i].style.margin = "0px";
  squares[i].style.padding = "0px";
}


var divs = document.getElementsByTagName("div");

for (var i = 0; i < divs.length; i++) {
  divs[i].style.margin = "0px";
  divs[i].style.padding = "0px";
}