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


var circles = new Array();






function Start () {

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
			x = Random.Range(-5f, 5f);
			y = Random.Range(-5f, 5f);
		}while (isOverlapping(x,y,r) == true);
			circles[i] = InstantiateCircle(x,y);
		}
		
	}


}