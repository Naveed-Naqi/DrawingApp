/// <reference path="p5.d/p5.global-mode.d.ts"/>

function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(220);
}

function mouseDragged()
{
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
}