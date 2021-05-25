var mouse_event = "";
var last_position_of_x,last_position_of_y;

 canvas = document.getElementById("mycanvas");
 ctx = canvas.getContext("2d");
 color = "red";
 linewidth = "3";

 canvas.addEventListener("mousedown" , my_mousedown); 

function my_mousedown(e){
  color = document.getElementById("color").value;
  linewidth = document.getElementById("line_width").value;
  radius = document.getElementById("radius").value;
  console.log("color - " + color);
  console.log("linewidth - " + linewidth);
  console.log("radius - " + radius);
 mouse_event = "mousedown";
  console.log(mouse_event);
  }

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e){
  mouse_event = "mouseup";
  console.log(mouse_event);
}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e){
  mouse_event = "mouseleave";
  console.log(mouse_event);
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e){
 current_position_of_x = e.clientX - canvas.offsetLeft;
 current_position_of_y = e.clientY - canvas.offsetTop;
  
  if(mouse_event == "mousedown"){
    console.log("current position of x = " + current_position_of_x);
     console.log("current position of y = " + current_position_of_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
 ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI);
    ctx.stroke();
  }
  last_position_of_x = current_position_of_x;
  last_position_of_y = current_position_of_y;
}

function cleararea(){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

