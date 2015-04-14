
import System.Collections.Generic;


var prefabCircle:GameObject;
private var instCircle:GameObject;

var pauseImage:GameObject;

var blueCirc:Sprite;
var greenCirc:Sprite;
var orangeCirc:Sprite;
var screenDem:Vector3;
var firstCirc:boolean = false;

//sprite list
var circColours = new List.<Sprite>();
circColours.Add(greenCirc);
circColours.Add(blueCirc);
circColours.Add(orangeCirc);


var circles = new Array();
function Start () {
//converts the current dimensions of the screen(pixels) to world dimensions (units) and stores it in a vector 3
screenDem = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));

}

function PauseGame(){

if(Time.timeScale == 1){
pauseImage.SetActive(true);
Time.timeScale = 0;
}
else{
Time.timeScale = 1;
pauseImage.SetActive(false);
}
}
          
//when called, fn creates a circle @ random position, random colour, and corresponding scale (to colour)
function InstantiateCircle(x, y){

//determines a random x and y pos for the new circle within the screen boundaries
var circPos:Vector2 = new Vector2(Random.Range(-screenDem.x+2.0f,screenDem.x-2.0f),Random.Range(-screenDem.y+2.0f,screenDem.y-2.0f));

//instantiates circle and stores in a gameobject variable
//current limitation - only set up for largest possible circle (radius of 2 units) therefore...smaller circles will never be at edge of screen
instCircle = Instantiate(prefabCircle, circPos, Quaternion.identity);


//selects random colour (sprite) for the circle (each colour of circle is a DIFFERENT SPRITE (probably not best way to do it)
instCircle.GetComponentInChildren.<SpriteRenderer>().sprite = circColours[Random.Range(0,3)];

//sets scale of circle depending on colour
if(instCircle.GetComponentInChildren.<SpriteRenderer>().sprite == greenCirc){
instCircle.transform.localScale = Vector3.one*0.5f;
 
}
else if(instCircle.GetComponentInChildren.<SpriteRenderer>().sprite == blueCirc){
instCircle.transform.localScale = Vector3.one*0.5f; 
}
else{
instCircle.transform.localScale = Vector3.one*0.5f; 
}

return instCircle;
}

function isOverlapping(x,y,r){
	var pt = Vector2(x, y);
	if(Physics2D.OverlapCircle(pt, r) == null){
		return false;
	}
	else{
		return true;
	}
}

function Update () {
var length = 4;
var x : float;
var y : float;
var r = 3.6;
circles.length = length;

for(var i = 0; i < length; i++){

	if (circles[i] == null){
		do{
			x = Random.Range(-screenDem.x+2.0f,screenDem.x-2.0f);
			y = Random.Range(-screenDem.y+2.0f,screenDem.y-2.0f);
		}while (isOverlapping(x,y,r) == true);
			circles[i] = InstantiateCircle(x,y);
		}
		
	}
	
	if(Input.GetKeyDown("space")){
	PauseGame();
}

}