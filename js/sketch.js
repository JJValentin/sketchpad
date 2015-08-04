var number = 16;

$(document).ready(function(){
	//Builds Grid
	grid(number)
	//Random Color on Hover
	color()
		
});

function grid(n){
 var size = 960;
 var boxSize = (960-2*n)/n;
 var wrapper = $("#wrapper").html("");
  
  for (var i = 0; i < n; i++){
    for (var j=0; j<n; j++){
    	wrapper.append($("<div/>").addClass("grid").height(boxSize).width(boxSize));
    }
  	wrapper.append($('<div/>').addClass("break").css("clear", "both"));
  
      }

  color()
}

function newGrid(){
	//Prompt for new grid
	var number = prompt("Please enter a grid size: ");
	//Builds Grid
	grid(number)
	//Random Color on hover
	color()

	return;
}

function colorGen(){
	//random color generated here
	var letters = '0123456789ABCDEF'.split('');
	var color ='#';
	for (var i=0;i<6;i++){
		color+=letters[Math.floor(Math.random()*16)];
	}
	return color;
}

function color(){
	$(".grid").hover(function(){
		$(this).css("background-color", colorGen());
	})
}