
import UnityEngine.UI;
public var counterText: Text;
var seconds: float;
var minutes: float;


function Start () {
 


}

function Update () {
minutes = (Time.timeSinceLevelLoad/60f);
seconds = (Time.timeSinceLevelLoad % 60f);


counterText.text = minutes.ToString("00") + ": " + seconds.ToString("00");

}