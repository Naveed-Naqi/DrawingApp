/// <reference path="p5.d/p5.global-mode.d.ts"/>
var pen_color = "white";

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("white");

    fill("blue");
    rect(10, 10, 20, 20);

    fill("red");
    rect(50, 10, 20, 20);

    fill("yellow");
    rect(90, 10, 20, 20);

    fill("purple");
    rect(130, 10, 20, 20);

    fill("black");
    rect(170, 10, 20, 20);

    fill("white");
    rect(210, 10, 20, 20);
}

function draw() 
{
    fill(pen_color);
    noStroke();
    smooth();
    ellipse(mouseX, mouseY, 25, 25, 20);
    noLoop();
}

function mouseDragged()
{
    loop();
}

function mouseReleased()
{
    noLoop();
}


function mousePressed()
{
    changeColor();
}

function changeColor()
{
    if(mouseX >= 10 && mouseX < 30 && mouseY >= 10 && mouseY < 30)
    {
        pen_color = "blue";
    }
    else if(mouseX >= 50 && mouseX < 70 && mouseY >= 10 && mouseY < 30)
    {
        pen_color = "red";
    }
    else if(mouseX >= 90 && mouseX < 110 && mouseY >= 10 && mouseY < 30)
    {
        pen_color = "yellow";
    }
    else if(mouseX >= 130 && mouseX < 150 && mouseY >= 10 && mouseY < 30)
    {
        pen_color = "purple";
    }
    else if(mouseX >= 170 && mouseX < 190 && mouseY >= 10 && mouseY < 30)
    {
        pen_color = "black";
    }
    else if(mouseX >= 210 && mouseX < 230 && mouseY >= 10 && mouseY < 30)
    {
        pen_color = "white";
    }
}
