#pragma strict
static var points: float = 0.0;
static var clickWorth = 0.1;
static var perfClickWorth = 5;
static var perSec: float = 0.0;
static var fillSpeed : float = 0.1;

function upgradeNormClick(){
if (points >= 10){
points -= 10;
clickWorth += 0.1;
}
else{
Debug.Log("NOT ENOUGH POINTS");
}
}

function upgradePerfClick(){
if (points >= 5){
points -= 5;
perfClickWorth += 0.5;
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

function upgradeFillSpeed(){
if (points >= 1){
points -= 10;
fillSpeed += 0.1;
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
}