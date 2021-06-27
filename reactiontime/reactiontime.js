/*
have a box on the screen
make the box disappear
when a box is clicked it reappears after some seconds
measure time between shape appearing and being clicked

random delaytime
random location
random shape
random color

*/
var clicked;
var start;
window.onload = appear();

function disappear(){
  document.getElementById('box').style.display= "none";
  clicked= Date.now();
  var reactiontime = (clicked-start)/1000;
  document.getElementById('para').innerHTML=" Reaction Time is " + reactiontime;
  var randomdelay = ((Math.random()*3)+1)*1000; //math.random() gives random number between 0 and 1
  setTimeout(appear, randomdelay);



}
function appear(){
  var randomleft = Math.random()*300;
  document.getElementById('box').style.left= randomleft+"px";
  var randomtop = Math.random()*350;
  var randomheight = Math.random()*200;
  var randomwidth = Math.random()*200;
  var randomcurve = Math.random();
  var randomcolor = "#" + ((1<<24)*Math.random() | 0).toString(16);
  if (randomcurve<0.4){
      document.getElementById('box').style.borderRadius= 25+"px";

  }else{
      document.getElementById('box').style.borderRadius= 0+"px";

  }
  document.getElementById('box').style.top= randomtop+"px";
  document.getElementById('box').style.height= randomheight+"px";
  document.getElementById('box').style.width= randomwidth+"px";
  document.getElementById('box').style.backgroundColor= randomcolor;

  document.getElementById('box').style.display= "block";
  start= Date.now();

}
