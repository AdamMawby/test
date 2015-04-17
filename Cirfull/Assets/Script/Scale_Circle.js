

 


var blueCirc:Sprite;
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



var currentSprite: Sprite = gameObject.GetComponent.<SpriteRenderer>().sprite;		// determines which sprite(colour) was selected


if(currentSprite == greenCirc){
scaleSpeed = 1.5f;
}
else if(currentSprite == blueCirc){		//fill rate dependant on colour of circle
scaleSpeed = 1.2f;
}
else if(currentSprite == orangeCirc){
scaleSpeed = 0.7f;
}

}	//end of start fn








function Update(){
if(scaling == true){
	transform.localScale += new Vector2(scaleSpeed,scaleSpeed)*Time.deltaTime;		//Scales this circle based upon the scale rate
}
}






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
scaling = false;
Destroy (transform.parent.gameObject,.5f);	//If the circle has overflown,destroy it in .5 seconds
Debug.Log("AutoDestroy");
}

}//end of oncollisionenter2d




function OnMouseDown(){


if(filled == true && overflown ==false){
scaling = false;
Debug.Log("NICE");
Destroy (transform.parent.gameObject,.5f);		//perfect tap

											//award bonus points


}if(filled == false && overflown == false){		//premature tap
scaling = false;
Destroy (transform.parent.gameObject);
}

}



