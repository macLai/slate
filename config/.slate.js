//1 | 2 | 3 | 4 | 5 | 6
//7 | 8 | 9 |10 |11 |12
// 1/4
var corner0103 = slate.operation("corner", {
	"direction" : "top-left",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY/2"
});
var corner0406 = slate.operation("corner", {
	"direction" : "top-right",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY/2"
});
var corner0709 = slate.operation("corner", {
	"direction" : "bottom-left",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY/2"
});
var corner1012 = slate.operation("corner", {
	"direction" : "bottom-right",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY/2"
});
// 1/3
var corner0102 = slate.operation("corner", {
	"direction" : "top-left",
	"width" : "screenSizeX/3",
	"height" : "screenSizeY/2"
});
var corner0304 = slate.operation("move", {
	"x" : "screenOriginX + screenSizeX/3",
	"y" : "screenOriginY",
	"width" : "screenSizeX/3",
	"height" : "screenSizeY/2"
});
var corner0506 = slate.operation("corner", {
	"direction" : "top-right",
	"width" : "screenSizeX/3",
	"height" : "screenSizeY/2"
});
var corner0708 = slate.operation("corner", {
	"direction" : "bottom-left",
	"width" : "screenSizeX/3",
	"height" : "screenSizeY/2"
});
var corner0910 = slate.operation("move", {
	"x" : "screenOriginX + screenSizeX/3",
	"y" : "screenOriginY + screenSizeY/2",
	"width" : "screenSizeX/3",
	"height" : "screenSizeY/2"
});
var corner1112 = slate.operation("corner", {
	"direction" : "bottom-right",
	"width" : "screenSizeX/3",
	"height" : "screenSizeY/2"
});
// 1/2
var corner0106 = slate.operation("corner", {
	"direction" : "top-left",
	"width" : "screenSizeX",
	"height" : "screenSizeY/2"
});
var corner0109 = slate.operation("corner", {
	"direction" : "top-left",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY"
});
var corner0412 = slate.operation("corner", {
	"direction" : "bottom-right",
	"width" : "screenSizeX/2",
	"height" : "screenSizeY"
});
var corner0712 = slate.operation("corner", {
	"direction" : "bottom-right",
	"width" : "screenSizeX",
	"height" : "screenSizeY/2"
});
// 1
var corner0112 = slate.operation("corner", {
	"direction" : "bottom-right",
	"width" : "screenSizeX",
	"height" : "screenSizeY"
});
//free
var cornerleft = slate.operation("push", {
	"direction" : "left"
});
var cornerright = slate.operation("push", {
	"direction" : "right"
});
var cornerup = slate.operation("push", {
	"direction" : "up"
});
var cornerdown = slate.operation("push", {
	"direction" : "down"
});

//| 1 | 2 | 3 |
//| 4 | 5 | 6 |
//| 7 | 8 | 9 |
function pos2num(rect) {
	var screenFrame = slate.screen().visibleRect();
	var pos2 = 0;
	var pos4 = 0;
	var pos6 = 0;
	var pos8 = 0;
	if(rect.y == screenFrame.y) {
		pos2 = 2;
	}
	if(rect.x == screenFrame.width+screenFrame.x-rect.width) {
		pos6 = 600;
	}
	if(rect.x == screenFrame.x) {
		pos4 = 40;
	}
	if(rect.y == screenFrame.height+screenFrame.y-rect.height) {
		pos8 = 8000;
	}
	var width = 0;
	var height = 0;
	if(rect.width == screenFrame.width) width = 1;
	if(rect.width == screenFrame.width/2) width = 1/2;
	if(rect.height == screenFrame.height) height = 1;
	if(rect.height - screenFrame.height/2 <= 2 && rect.height - screenFrame.height/2 >= -2)
		height = 1/2;
	var size = width * height

	var pos = pos2 + pos4 + pos6 +pos8;
	if(pos ==    0) return 5;
	if(pos ==    2) return 2;
	if(pos ==   40) return 4;
	if(pos ==  600) return 6;
	if(pos == 8000) return 8;
	if(pos ==   42 && size == 1/4) return 1;
	else if(pos ==   42 && size == 0) return 15;
	if(pos ==  602 && size == 1/4) return 3;
	else if(pos ==  602 && size == 0) return 35;
	if(pos == 8040 && size == 1/4) return 7;
	else if(pos == 8040 && size == 0) return 75;
	if(pos == 8600 && size == 1/4) return 9;
	else if(pos == 8600 && size == 0) return 95;
	if(pos ==  642 && size == 1/2) return 13;
	else if(pos ==  642 && size == 0) return 25;
	if(pos == 8042 && size == 1/2) return 17;
	else if(pos == 8042 && size == 0) return 45;
	if(pos == 8602 && size == 1/2) return 39;
	else if(pos == 8602 && size == 0) return 65;
	if(pos == 8640 && size == 1/2) return 79;
	else if(pos == 8640 && size == 0) return 85;
	if(pos == 8002) return 28;
	if(pos ==  640) return 46;
	if(pos == 8642) return 19;
	else return 5;

}

function num2pos(win,num) {
	switch(num) {
	case 1:
		win.doOperation(corner0103);
		break;
	case 2:
		win.doOperation(cornerup);
		break;
	case 3:
		win.doOperation(corner0406);
		break;
	case 4:
		win.doOperation(cornerleft);
		break;
	case 6:
		win.doOperation(cornerright);
		break;
	case 7:
		win.doOperation(corner0709);
		break;
	case 8:
		win.doOperation(cornerdown);
		break;
	case 9:
		win.doOperation(corner1012);
		break;
	case 13:
		win.doOperation(corner0106);
		break;
	case 17:
		win.doOperation(corner0109);
		break;
	case 39:
		win.doOperation(corner0412);
		break;
	case 79:
		win.doOperation(corner0712);
		break;
	}
}

//up-0,down-3,left-1,right-2
function toPosition(positionTo,posID,win) {
	var positionFrom = posID;

	if(positionTo == 0) {
		switch(positionFrom) {
		case 2:
		case 25:
		case 15:
		case 35:
		case 1:
		case 3:
		case 28:
		case 45:
		case 65:
		case 19:
			frame = num2pos(win,13);
			break;
		case 13:
			return;
		case 17:
			frame = num2pos(win,1);
			break;
		case 39:
			frame = num2pos(win,3);
			break;
		default:
			frame = num2pos(win,2);
			break;
		}
	}
	else if(positionTo == 1) {
		switch(positionFrom) {
		case 4:
		case 45:
		case 1:
		case 15:
		case 7:
		case 75:
		case 46:
		case 85:
		case 25:
		case 19:
			frame = num2pos(win,17);
			break;
		case 17:
			return;
		case 13:
			frame = num2pos(win,1);
			break;
		case 79:
			frame = num2pos(win,7);
			break;
		default:
			frame = num2pos(win,4);
		}
	}
	else if(positionTo == 2) {
		switch(positionFrom) {
		case 6:
		case 65:
		case 3:
		case 35:
		case 9:
		case 95:
		case 46:
		case 25:
		case 85:
		case 19:
			frame = num2pos(win,39);
			break;
		case 39:
			return;
		case 13:
			frame = num2pos(win,3);
			break;
		case 79:
			frame = num2pos(win,9);
			break;
		default:
			frame = num2pos(win,6);
		}
	}
	else if(positionTo == 3) {
		switch(positionFrom) {
		case 8:
		case 85:
		case 7:
		case 75:
		case 9:
		case 95:
		case 28:
		case 45:
		case 65:
		case 19:
			frame = num2pos(win,79);
			break;
		case 79:
			return;
		case 17:
			frame = num2pos(win,7);
			break;
		case 39:
			frame = num2pos(win,9);
			break;
		default:
			frame = num2pos(win,8);
		}
	}
}

function toNextWindows(win) {
	if(win != null && win.isMinimizedOrHidden()) {
		win.unMinimize();
		return;
	}
	var winList = slate.app().allWindows();
	if(winList == null || (winList.length == 1 && win != null)) {
		return;
	}
	winList[winList.length - 1].unMinimize();
	winList[winList.length - 1].focus();
	return;
}

slate.bind("left:ctrl,alt,cmd", function(win) {
	if(win == null) return;
	pos = pos2num(win.rect());
	toPosition(1,pos,win);
});
slate.bind("right:ctrl,alt,cmd", function(win) {
	if(win == null) return;
	pos = pos2num(win.rect());
	toPosition(2,pos,win);
});
slate.bind("up:ctrl,alt,cmd", function(win) {
	if(win == null) return;
	pos = pos2num(win.rect());
	toPosition(0,pos,win);
});
slate.bind("down:ctrl,alt,cmd", function(win) {
	if(win == null) return;
	pos = pos2num(win.rect());
	toPosition(3,pos,win);
});
slate.bind("`:cmd", function(win) {
	toNextWindows(win);
});
slate.bind("m:ctrl,alt,cmd", function(win) {
	if(win == null) return;
	win.doOperation(corner0112);
});
slate.bind("c:ctrl,alt,cmd", function(win) {
	if(win == null) return;
	win.doOperation("move",{
		"x" : "screenOriginX+screenSizeX*0.1",
		"y" : "screenOriginY",
		"width" : "screenSizeX*0.8",
		"height" : "screenSizeY*0.95"
	});
});
slate.bind("space:ctrl,alt,cmd", function(win) {
	if(win == null) return;
	var idBefore = win.screen().id();
	count = slate.screenCount();
	if(idBefore == count - 1) idAfter = 0;
	else idAfter = idBefore + 1;
	var rectBefore = slate.screenForRef(idBefore).visibleRect();
	var rectAfter = slate.screenForRef(idAfter).visibleRect();
	var rectWin = win.rect();
	win.doOperation("throw",{
		"screen" : idAfter,
		"x" : rectWin.x / rectBefore.x * rectAfter.x,
		"y" : rectWin.y / rectBefore.y * rectAfter.y,
		"width" : rectWin.width / rectBefore.width * rectAfter.width,
		"height" : rectWin.height / rectBefore.height * rectAfter.height
	});
});