#pragma strict
import System.Collections.Generic;

var prefabCircle:GameObject;
private var instCircle:GameObject;


var blueCirc:Sprite;
var greenCirc:Sprite;
var orangeCirc:Sprite;

//sprite list
var circColours = new List.<Sprite>();
circColours.Add(greenCirc);
circColours.Add(blueCirc);
circColours.Add(orangeCirc);


function Start () {
InstantiateCircle();
}

//when called, fn creates a circle @ random position, random colour, and corresponding scale (to colour)
function InstantiateCircle(){
instCircle = Instantiate(prefabCircle, new Vector2(Random.Range(-3f,3f),Random.Range(-3f,3f)), Quaternion.identity);

//selects random colour (sprite)
instCircle.GetComponentInChildren.<SpriteRenderer>().sprite = circColours[Random.Range(0,3)];

//sets scale of circle depending on colour
if(instCircle.GetComponentInChildren.<SpriteRenderer>().sprite == greenCirc){
instCircle.transform.localScale = Vector3.one*1.5f;
 
}
else if(instCircle.GetComponentInChildren.<SpriteRenderer>().sprite == blueCirc){
instCircle.transform.localScale = Vector3.one*1.0f; 
}
else{
instCircle.transform.localScale = Vector3.one*0.5f; 
}
}

function Update () {
if(instCircle == null){
InstantiateCircle();

}
}