
import UnityEngine.UI;
public var counterText: Text;
var seconds: float;
var minutes: float;
var totalmilli: float;


function Start () {
 


}

function FormatTime (time){
 
     var intTime : int = Mathf.Floor(time);
     var minutes : int = intTime / 60;
     var seconds : int = intTime % 60;
     var fraction : int = time * 1000;
     fraction = fraction % 1000;
     timeText = String.Format ("{0:00}:{1:00}:{2:000}", minutes, seconds,fraction);
     return timeText;
}

var startTime = 0;

function Update () {

//The time taken so far
timeTaken = startTime + Time.time;
// Format the time nicely
guiText.text = FormatTime (timeTaken);





//counterText.text = minutes.ToString("00") + ": " + seconds.ToString("00") + ": " + milli.ToString("000");

}