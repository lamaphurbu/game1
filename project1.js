const blocks = document.querySelectorAll('.block')
let result = 0;
let hitPosition
let time = 60;
function startButton(){
	var start = document.getElementsByClassName("start");
	start[0].style.display="none";
	var introduction = document.getElementsByClassName("intro");
	introduction[0].style.display="none";
	var game = document.getElementsByClassName("game")[0];
	game.style.visibility = "visible";
	var text = document.getElementsByTagName("h2")[0];
	text.style.display = "block";
	var text1 = document.getElementsByTagName("h2")[1];
	text1.style.display = "block";
	var text2 = document.getElementsByTagName("h2")[2];
	text2.style.display = "block";
	var text3 = document.getElementsByTagName("h2")[3];
	text3.style.display = "block";
	setInterval(function random(){
	var block1 = document.getElementById('1');
	block1.classList.remove('nami');
	var block2 = document.getElementById('2');
	block2.classList.remove('nami');
	var block3 = document.getElementById('3');
	block3.classList.remove('nami');
	var block4 = document.getElementById('4');
	block4.classList.remove('nami');
	var block5 = document.getElementById('5');
	block5.classList.remove('nami');
	var block6 = document.getElementById('6');
	block6.classList.remove('nami');
	var block7 = document.getElementById('7');
	block7.classList.remove('nami');
	var block8 = document.getElementById('8');
	block8.classList.remove('nami');
	var block9 =document.getElementById('9');
	block9.classList.remove('nami');
	var randomX = Math.ceil(Math.random()*9);
	//console.log(randomX);
	if(randomX == "1"){
		var block1 = document.getElementById('1');
		block1.classList.add('nami') ;
		hitPosition = block1;	}
		if(randomX == "2"){
		var block2 = document.getElementById('2');
		block2.classList.add('nami') ;
		hitPosition = block2;	}
		if(randomX == "3"){
		var block3 = document.getElementById('3');
		block3.classList.add('nami') ;	
		hitPosition = block3; }
		if(randomX == "4"){
		var block4 = document.getElementById('4');
		block4.classList.add('nami') ;	
		hitPosition = block4; }
		if(randomX == "5"){
		var block5 = document.getElementById('5');
		block5.classList.add('nami') ;	
		hitPosition = block5; }
		if(randomX == "6"){
		var block6 = document.getElementById('6');
		block6.classList.add('nami') ;
		hitPosition = block6;	}
		if(randomX == "7"){
		var block7 = document.getElementById('7');
		block7.classList.add('nami') ;
		hitPosition = block7;	}
		if(randomX == "8"){
		var block8 = document.getElementById('8');
		block8.classList.add('nami') ;	
		hitPosition = block8; }
		if(randomX == "9"){
		var block9 = document.getElementById('9');
		block9.classList.add('nami') ;	
		hitPosition = block9; }
		 function result1() {
	if(hitPosition == block1){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
}
var block1 = document.getElementById('1');
block1.addEventListener('click',result1)
var block2 = document.getElementById('2');
block2.addEventListener('click',function(){
	if(hitPosition == block2){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
})
var block3 = document.getElementById('3');
block3.addEventListener('click',function(){
	if(hitPosition == block3){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
})
var block4 = document.getElementById('4');
block4.addEventListener('click',function(){
	if(hitPosition == block4){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
})
var block5 = document.getElementById('5');
block5.addEventListener('click',function(){
	if(hitPosition == block5){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
})
var block6 = document.getElementById('6');
block6.addEventListener('click',function(){
	if(hitPosition == block6){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
})
var block7 = document.getElementById('7');
block7.addEventListener('click',function(){
	if(hitPosition == block7){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
})
var block8 = document.getElementById('8');
block8.addEventListener('click',function(){
	if(hitPosition == block8){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
})
var block9 = document.getElementById('9');
block9.addEventListener('click',function(){
	if(hitPosition == block9){
		result++;
		var score = document.getElementById('score');
		score.textContent = result;
		hitPosition = null;
	}
})
},300)

setInterval(function gameTime(){
	time=time-1;
	//console.log(time);
	timing();
	if (time == -1){
		var game = document.getElementsByClassName('game')[0];
		game.style.display = "none";
		alert('Game is over.Your score is: ' + result +". Press okay to play again")
		window.location.reload();
	}
},1000);

}
//function for the time of the game 
function timing(){
	var timeX = document.getElementById('time');
	timeX.textContent = time;
}
//for the start of the game
function loadFunction(){
	var start = document.getElementsByClassName("start");
	start[0].addEventListener('click',startButton);
	
	}
	document.addEventListener('DOMContentLoaded',loadFunction);