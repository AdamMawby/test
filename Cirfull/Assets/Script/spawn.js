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

var circles = new Array();  //Array to hold all of the circle gameobjects
circles.length = 1;
function Start () {
//circles[0] = InstantiateCircle(0,0);
}

//when called, fn creates a circle @ random position, random colour, and corresponding scale (to colour)
function InstantiateCircle(x, y){
instCircle = Instantiate(prefabCircle, Vector2(x, y), Quaternion.identity);

//selects random colour (sprite)
instCircle.GetComponentInChildren.<SpriteRenderer>().sprite = circColours[Random.Range(0,3)];

//sets scale of circle depending on colour
if(instCircle.GetComponentInChildren.<SpriteRenderer>().sprite == greenCirc){
instCircle.transform.localScale = Vector3.one*1.0f;
 
}
else if(instCircle.GetComponentInChildren.<SpriteRenderer>().sprite == blueCirc){
instCircle.transform.localScale = Vector3.one*0.75f; 
}
else{
instCircle.transform.localScale = Vector3.one*0.5f; 
}

return instCircle;
}



function Update () {
Debug.Log("test 4");

var length = 1;
circles.length = length;
Debug.Log("test 5");
for(var i = 0; i < length; i++){
	Debug.Log("test 6");

	if (circles[i] == null){
	Debug.Log("test 7");	//If it detects that a circle is missing:
		var x = Random.Range(-3f,3f);
		var y = Random.Range(-3f,3f);
		var smallerx : float;
		var biggerx : float;
		var smallery : float;
		var biggery : float;
		var dist: float;
		var touching = true;
		
		var objectArray : Transform[];
		objectArray = GameObject.FindObjectsOfType(Transform);	//Fills an array with the transforms of all game objects on screen
		var circleTransforms = new List.<Transform>();
		
		
		
		
		Debug.Log("test 1");
		for (var t: Transform in objectArray){
			if(t.gameObject.tag == "circle"){
				circleTransforms.Add(t);
				Debug.Log(circleTransforms.Count + "CircleTransforms Length");
			}
			
		}
		//var circleTransArray = new Array(circleTransforms);
		
		//Debug.Log(circleTransArray.length);
		Debug.Log("test 2");
		if(circleTransforms != null){
		Debug.Log("test 3");
		
		
		do{
		x = Random.Range(-3f,3f);
		y = Random.Range(-3f,3f);	//Comes up with a potential x and y value for the new instantiation
		Debug.Log(x + ", " + y);
		for (var p = 0; p < circleTransforms.Count; p++){	//For as many objects that are on the screen:
		
		
		/////Start of finding which values are bigger and smaller/////
		
			if (Mathf.Abs(x) > Mathf.Abs(circleTransforms[p].position.x)){		//If the current object in the array has a bigger x value than the generated one:
				biggerx = Mathf.Abs(x);
				smallerx = Mathf.Abs(circleTransforms[p].position.x);		//Store the values as bigger and smaller for calculations later
			}
			else{
				smallerx = Mathf.Abs(x);
				biggerx = Mathf.Abs(circleTransforms[p].position.x);	
			}
			
			if (y > circleTransforms[p].position.y){
				biggery = Mathf.Abs(y);
				smallery = Mathf.Abs(circleTransforms[p].position.y);		//Do the same for Y
			}
			else{
				smallery = Mathf.Abs(y);
				biggery = Mathf.Abs(circleTransforms[p].position.y);	
			}
			
			/////End of finding which are bigger and smaller/////
			
			
			
			dist = Mathf.Sqrt(Mathf.Pow((biggerx - smallerx ),2)+ Mathf.Pow((biggery - smallery), 2));	//The distance between the generated x and y values and the current object's position
			
			if (dist > 3.6){		//If the distance is more than the biggest possible diameter, create the circle in the empty position of the array.
				touching = false;	//Allow the do while loop to close
				circles[i] = InstantiateCircle(x, y);
				Debug.Log("Created a circle , " + dist);
				
			}
			
			
			
		}
		
		}while(touching == true);  //Close the do while loop when a suitable coordinate is found.
		
		
		
		
	}
	else{
	Debug.Log("test 8");
	circles[i] = InstantiateCircle(x,y);
	}
	}
	
}


}