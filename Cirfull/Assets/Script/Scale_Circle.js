﻿var blueCirc:Sprite;
var greenCirc:Sprite;
var orangeCirc:Sprite;

private var scaleSpeed:float;

//circle states
private var filled:boolean = false;
private var overflown:boolean = false;
private var scaling:boolean;

function Start () {
scaling = true;
transform.localScale.x = 0;	//Starts the circle as invisible
transform.localScale.y = 0;
scaleSpeed = 1.5f;



}	//end of start fn

//Circle Collider vs. Edge colliders

function OnTriggerEnter2D(coll: Collider2D):void{

if(coll.gameObject.tag == "Circ_Outline_Inner"){		//Checks when the circle is perfectly filled
Debug.Log("TAP");
filled = true;

}
else if(coll.gameObject.tag == "Circ_Outline_Outer"){		//Checks if the circle has overflown
Debug.Log("OVERFLOW");
overflown = true;

//Application.LoadLevel("StartScreen_02_adam");		//Exits to main menu if one circle overflows (Death)
}
//late tap (overflown)
else if(coll.gameObject.tag == "Circ_Overflow"){
transform.localScale = Vector3(0,0,0);	//If the circle has overflown,destroy it in .5 seconds
Debug.Log("AutoDestroy");
}

}//end of oncollisionenter2d

function OnMouseDown(){

if(filled == true && overflown ==false){
Debug.Log("NICE");
transform.localScale = Vector3(0,0,0);//perfect tap	
Incremental_Processes.points += perfClickWorth;										
}
if(filled == false && overflown == false){		//premature tap
transform.localScale = Vector3(0,0,0);
Incremental_Processes.points += clickWorth;
Debug.Log(Incremental_Processes.points);

}


}
var clickWorth;
var perfClickWorth;
function Update(){
clickWorth = Incremental_Processes.clickWorth;
perfClickWorth = Incremental_Processes.perfClickWorth;
if(scaling == true){
	transform.localScale += new Vector2(scaleSpeed,scaleSpeed)*Time.deltaTime;		//Scales this circle based upon the scale rate
}
filled = false;
overflown = false;
}





