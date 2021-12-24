var RandomNumber1 = Math.floor(Math.random() * 6)+1;

var RandomImage1 = "images/dice" + RandomNumber1 + ".png";

var imagesChange = document.querySelectorAll("img")[0];

imagesChange.setAttribute("src", RandomImage1);


var RandomNumber2 = Math.floor(Math.random() * 6)+1;

var RandomImage2 = "images/dice" + RandomNumber2 + ".png";

var imagesChange1 = document.querySelectorAll("img")[1];

imagesChange1.setAttribute("src", RandomImage2);


if (RandomNumber1 > RandomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩" + "Player 1 wins!";
}
else if (RandomNumber2 > RandomNumber1) {
    document.querySelector("h1").innerHTML = " 🚩" + "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}