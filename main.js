
color = "black" 
line_width = 1.5;


canvas = document.getElementById("paintarea");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

var screen_width = screen.width;
new_width = screen.width - 80;
new_height = screen.height - 120;


document.getElementById("paintarea").style.width = new_width;
document.getElementById("paintarea").style.height = new_height;
document.body.style.overflow = "hidden";

canvas.addEventListener("touchstart",touch_start);
function touch_start(e){

last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y = e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",touch_move);
function touch_move(e){
   
    current_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y); 
ctx.stroke();

last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;

    }
    

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        color = document.getElementById("colorinput").value;
    lineWidth = document.getElementById("widthinput").value;
       
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

