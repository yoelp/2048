var gm = game();
gm.init(6,2);

window.addEventListener("keyup",function(e){
	switch(e.keyCode){
		case 37:
		case 72:
			gm.move("L");
			break;
		case 38:
		case 74:
			gm.move("U")
			break;
		case 39:
		case 75:
			gm.move("R");
			break;
		case 40:
		case 73:
			gm.move("D");
			break;
	}
});
