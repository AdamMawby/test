
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
var pauseImage:GameObject;

//CIRCLE ARRAY
var circles = new Array();


//TIMING VARIABLES
var counterText: Text;
var intTime : int;
var minutes : int;
var seconds : int;
var fraction : int;
var startTime = 0;

function FormatTime (time){
 	
    intTime = Mathf.Floor(time);
    minutes = intTime / 60;
    seconds = intTime % 60;			// Calculates timing data
    fraction = time * 1000;
    fraction = fraction % 1000;
    timeText = String.Format ("{0:00}:{1:00}:{2:000}", minutes, seconds,fraction);		//Formats the text object with the new data every update
    return timeText;
}






function Start () {
//converts the current dimensions of the screen(pixels) to world dimensions (units) and stores it in a vector 3
screenDem = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));
startTime = 1;




}

//when called, fn creates a circle @ random position, random colour, and corresponding scale (to colour)
function InstantiateCircle(x, y){
instCircle = Instantiate(prefabCircle, Vector2(x, y), Quaternion.identity);

//selects random colour (sprite)
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
	var pt = Vector2(x, y);								//Picks a point
	if(Physics2D.OverlapCircle(pt, r) == null){			//Checks if there are any collisions within the radius of a circle there
		return false;
	}
	else{
		return true;
	}
}



function PauseGame(){

if(Time.timeScale == 1){
pauseImage.SetActive(true);		//Pauses time if the user presses the pause button
Time.timeScale = 0;
}
else{
Time.timeScale = 1;
pauseImage.SetActive(false);	// starts time if the user re-presses the pause button
}
}



var length = 1;
var x : float;
var y : float;
var r = 1.80;

function Update () {

										
timeTaken = startTime + Time.time;		//The time taken so far
											
counterText.text = FormatTime (timeTaken);	// Format the time 


//Spawn a new circle every 30 seconds if milliseconds is between 1 and 15
if (seconds % 30 == 0 && (fraction >=1 && fraction <= 15)){
	length++;
}


if(Input.GetKeyDown("space")){
PauseGame();					//Run pause function when spacebar is pressed
}




circles.length = length;		//sets length of circles array



for(var i = 0; i < length; i++){	//runs through circles array

	if (circles[i] == null){		//if one of the elements is empty
		var timeOut = 0;
		do{
			timeOut++;
			if (timeOut > 10){		//checks if the while loop is running for a long time, if so, quits the loop (to prevent overflow)
			break;
			}
		    
			x = Random.Range(-screenDem.x+1.0f,screenDem.x-1.0f);	//Picks a random point between the limits of the screen resolution
			y = Random.Range(-screenDem.y+1.0f,screenDem.y-2.0f);
			
			
		}while (isOverlapping(x,y,r) == true);	//Checks if there is a circle already near the point, if there is not:
		 
			
			circles[i] = InstantiateCircle(x,y);	//Fills the empty element with a circle object
		}
		
	}


}