
import UnityEngine.UI;
public var counterText: Text;
var seconds: float;
var minutes: float;
var milli: float;


function Start () {
 


}

function Update () {
minutes = (Time.timeSinceLevelLoad/60f);
seconds = (Time.timeSinceLevelLoad % 60f);
milli = (Time.timeSinceLevelLoad % 1000f);




counterText.text = minutes.ToString("00") + ": " + seconds.ToString("00") + ": " + milli.ToString("00");

}