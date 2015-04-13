
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


function Start () {
//converts the current dimensions of the screen(pixels) to world dimensions (units) and stores it in a vector 3
screenDem = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));

InstantiateCircle();
firtCirc = true;
}



                 


//when called, fn creates a circle @ random position, random colour, and corresponding scale (to colour)
function InstantiateCircle(){



//determines a random x and y pos for the new circle within the screen boundaries
var circPos:Vector2 = new Vector2(Random.Range(-screenDem.x+2.0f,screenDem.x-2.0f),Random.Range(-screenDem.y+2.0f,screenDem.y-2.0f));

//instantiates circle and stores in a gameobject variable
//current limitation - only set up for largest possible circle (radius of 2 units) therefore...smaller circles will never be at edge of screen
instCircle = Instantiate(prefabCircle, circPos, Quaternion.identity);


//selects random colour (sprite) for the circle (each colour of circle is a DIFFERENT SPRITE (probably not best way to do it)
instCircle.GetComponentInChildren.<SpriteRenderer>().sprite = circColours[Random.Range(0,3)];

//sets scale of circle depending on colour
if(instCircle.GetComponentInChildren.<SpriteRenderer>().sprite == greenCirc){
instCircle.transform.localScale = Vector3.one*1f;
 
}
else if(instCircle.GetComponentInChildren.<SpriteRenderer>().sprite == blueCirc){
instCircle.transform.localScale = Vector3.one*0.75f; 
}
else{
instCircle.transform.localScale = Vector3.one*0.5f; 
}
}













//////////////////////////////////////////

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

////////////////////////////////////////



function Update () {

if(Input.GetKeyDown("space")){
PauseGame();
}

if(instCircle == null){
InstantiateCircle();

}
}