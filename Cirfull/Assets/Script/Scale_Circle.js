

 


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
transform.localScale.x = 0;
transform.localScale.y = 0;


// determines which sprite(colour) was selected
var currentSprite: Sprite = gameObject.GetComponent.<SpriteRenderer>().sprite;

//fill rate dependant on colour of circle
if(currentSprite == greenCirc){
scaleSpeed = 1.5f;
}
else if(currentSprite == blueCirc){
scaleSpeed = 1.2f;
}
else if(currentSprite == orangeCirc){
scaleSpeed = 0.7f;
}

}//end of start fn








function Update(){
if(scaling == true){
	transform.localScale += new Vector2(scaleSpeed,scaleSpeed)*Time.deltaTime;
}
}






//Circle Collider vs. Edge colliders

function OnTriggerEnter2D(coll: Collider2D):void{

if(coll.gameObject.tag == "Circ_Outline_Inner"){
Debug.Log("TAP");
filled = true;

}
else if(coll.gameObject.tag == "Circ_Outline_Outer"){
Debug.Log("OVERFLOW");
overflown = true;

//Application.LoadLevel("StartScreen_02_adam");
}
//late tap (overflown)
else if(coll.gameObject.tag == "Circ_Overflow"){
scaling = false;
Destroy (transform.parent.gameObject,.5f);
Debug.Log("AutoDestroy");
}

}//end of oncollisionenter2d




function OnMouseDown(){

//perfect tap
if(filled == true && overflown ==false){
scaling = false;
Debug.Log("NICE");
Destroy (transform.parent.gameObject,.5f);

//award bonus points

//premature tap
}if(filled == false && overflown == false){
scaling = false;
Destroy (transform.parent.gameObject);
}

}



