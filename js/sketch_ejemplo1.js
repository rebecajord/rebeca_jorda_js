var g=90;
var check =false;
var un=1;

function setup() {
	createCanvas(197,152);
}
function draw(){
	//rect(0,0,10,10);
	g=g+un;
	if(g==0){
		check=false;
	}
	if(g==90){
		check=true;
	}

	if (check==false){
		un=1;
	}else{
		un=-1;
	}
	background(2,206,191);
	noFill();
	for(var posx=0; posx<width; posx=posx+20){
		for(var posy=0; posy<height; posy=posy+20){
			//stroke(255, 100, 100);
			push();
			translate(posx,posy);
				/*push();
					rotate(radians(g));
					rect(0,0,3,3);
				pop();*/
				stroke(89,14,53);
				line(0,0,0,4);

				stroke(163,25,91);
				line(0,0,20,0);

				stroke(201,45,127);
				curve(-17, -10, 0, 20, 20, 0, -3, -9);

				push();
					rotate(radians(g));
					stroke(247,60,158);
					line(20,20,12,13);
				pop();
			pop();
		}
	}
}