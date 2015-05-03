
import System.Collections.Generic;
import UnityEngine.UI;




//SPRITE DATA
var prefabCircle:GameObject;
private var instCircle:GameObject;
var screenDem:Vector3;
var blueCirc:Sprite;
var greenCirc:Sprite;
var orangeCirc:Sprite;
var circColours = new List.<Sprite>();
circColours.Add(greenCirc);
circColours.Add(blueCirc);
circColours.Add(orangeCirc);
//TIMING VARIABLES
var counterText: Text;

function FormatPoints (points){
    pointText = String.Format ("{000}", points);		//Formats the text object with the new data every update
    return pointText;
}






function Start () {
InstantiateCircle();
//converts the current dimensions of the screen(pixels) to world dimensions (units) and stores it in a vector 3
screenDem = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));

}

//when called, fn creates a circle @ random position, random colour, and corresponding scale (to colour)
function InstantiateCircle(){
instCircle = Instantiate(prefabCircle, Vector2(0,0), Quaternion.identity);
//sets scale of circle 
instCircle.transform.localScale = Vector3.one*0.5f;
return instCircle;
}


function Update () {																	
counterText.text = FormatPoints (Incremental_Processes.points);	// Format the time 
}