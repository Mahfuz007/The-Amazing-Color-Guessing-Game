var difficulty=6;
var colors=generateRandomColor(difficulty);
var squares=document.querySelectorAll('.square');
var message=document.getElementById("message");
var pickedcolor=pickColor();
var h1=document.querySelector('h1');
var newcolor=document.getElementById("new");
var colorchange=document.getElementById('colorchange');
var easybtn=document.getElementById("Option1");
var hardbtn=document.getElementById("Option2");

colorchange.textContent=pickedcolor;

easybtn.addEventListener("click",function(){
	difficulty=3;
	this.classList.add("selected");
	hardbtn.classList.remove("selected");
	newGame();
	for(var i=3;i<6;i++){
		squares[i].style.display="none";
	}
});

hardbtn.addEventListener("click",function(){
	this.classList.add("selected");
	easybtn.classList.remove("selected");
	difficulty=6;
	newGame();
});


newcolor.addEventListener("click",function(){
	newGame();
});

for(var i=0;i<difficulty;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener('click',function(){
		var clickcolor= this.style.backgroundColor;

		if(clickcolor==pickedcolor){
			message.textContent="Correct!!";
			ChangeColor(clickcolor);
			h1.style.backgroundColor=clickcolor;
			newcolor.textContent="Play Again?"
		}
		else{
			message.textContent="Try Again";
			this.style.backgroundColor="black";
		}
	});
}

function ChangeColor(color)
{
	for(var i=0;i<difficulty;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(val)
{
	var data=[];

	for(var i=0;i<val;i++){
		var tmp="rgb("+createColor()+", "+createColor()+", "+createColor()+")";
		data.push(tmp);
	}

	return data;
}

function createColor()
{
	var cc=Math.floor(Math.random()*256);
	return cc;
}

function newGame()
{
	colors=generateRandomColor(difficulty);
	pickedcolor=pickColor();
	message.textContent="";
	colorchange.textContent=pickedcolor;

	for(var i=0;i<difficulty;i++){
		squares[i].style.backgroundColor=colors[i];
	}

	newcolor.textContent="NEW COLORS";
	h1.style.backgroundColor="steelblue";
}