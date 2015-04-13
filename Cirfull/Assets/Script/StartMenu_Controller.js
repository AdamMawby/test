



public function ChangeToScene(sceneToChangeTo:int):void{

Application.LoadLevel(sceneToChangeTo);

}


public function ExitGame():void{
Debug.Log("quit");
Application.Quit();

}