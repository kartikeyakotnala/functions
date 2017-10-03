// AutoType(string,speed); String is the text to type and speed is typing speed in ms .To use the function assign id to desired tag as - 'Autotype'.

function AutoType(string,speed){
	var a=string.split("");
	var i=0;
	function call(){
		document.getElementById('AutoType').innerHTML+=a.shift();
		i++;
		if(i==string.length)
		clearInterval(z);
	}
	var z=setInterval(call,speed);
}