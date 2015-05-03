var blueCirc:Sprite;
var greenCirc:Sprite;
var orangeCirc:Sprite;

private var scaleSpeed:float;

//circle states
private var filled:boolean = false;
private var overflown:boolean = false;
private var scaling:boolean;
private var particles : ParticleEmitter;

function Start () {
particles = GetComponent(ParticleEmitter);
scaling = true;
transform.localScale.x = 0;	//Starts the circle as invisible
transform.localScale.y = 0;




}	//end of start fn

//Circle Collider vs. Edge colliders

function OnTriggerEnter2D(coll: Collider2D):void{
filled = false;
overflown = false;
if(coll.gameObject.tag == "Circ_Outline_Inner"){		//Checks when the circle is perfectly filled
filled = true;

}
else if(coll.gameObject.tag == "Circ_Outline_Outer"){		//Checks if the circle has overflown
overflown = true;


//Application.LoadLevel("StartScreen_02_adam");		//Exits to main menu if one circle overflows (Death)
}
//late tap (overflown)
else if(coll.gameObject.tag == "Circ_Overflow"){
transform.localScale = Vector3(0,0,0);	//If the circle has overflown,destroy it in .5 seconds
}


}//end of oncollisionenter2d

function OnMouseDown(){

if(filled == true && overflown ==false){
filled = false;
overflown = false;
//transform.localScale = Vector3(0,0,0);//perfect tap	
Incremental_Processes.points += perfClickWorth;									
}
if(filled == false && overflown == false){		//premature tap
//transform.localScale = Vector3(0,0,0);
Incremental_Processes.points += clickWorth;
GetComponent.<ParticleSystem>().Play();

}


}
var clickWorth;
var perfClickWorth;
function Update(){
scaleSpeed = Incremental_Processes.fillSpeed;
clickWorth = Incremental_Processes.clickWorth;
perfClickWorth = Incremental_Processes.perfClickWorth;
if(scaling == true){
	transform.localScale += new Vector2(scaleSpeed,scaleSpeed)*Time.deltaTime;		//Scales this circle based upon the scale rate
	Debug.Log(scaleSpeed);
}

}





