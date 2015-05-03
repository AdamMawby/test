#pragma strict
static var points = 0;
static var clickWorth = 1;
static var perfClickWorth = 5;

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
perfClickWorth += 1;
}
else{
Debug.Log("NOT ENOUGH POINTS");
}
}

function Start () {
Debug.Log(points);
}

function Update () {
Debug.Log(points);
}