#pragma strict
static var points: float = 0.0;
static var clickWorth = 1;
static var perfClickWorth = 50;
static var perSec: float = 0.0;

function upgradeNormClick(){
if (points >= 10){
points -= 10;
clickWorth += 1;
}
else{
Debug.Log("NOT ENOUGH POINTS");
}
}

function upgradePerfClick(){
if (points >= 5){
points -= 5;
perfClickWorth += 10;
}
else{
Debug.Log("NOT ENOUGH POINTS");
}
}

function upgradePerSec(){
if (points >= 15){
points -= 15;
perSec += 0.1;
}
else{
Debug.Log("NOT ENOUGH POINTS");
}
}



function Start () {
Debug.Log(points);
}

function Update () {
points += perSec * Time.deltaTime;
Debug.Log(points);
}