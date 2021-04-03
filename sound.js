function sound()
{
    var music=new Audio("audio/Bogurodzica.mp3");
    music.play();
    setTimeout("sound()",286000);
}