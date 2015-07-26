canvas = document.getElementById("canvas");
old_keydown = this.onkeydown;
old_keyup = this.onkeyup;
old_mousemove = canvas.onmousemove;
currentX = canvas.width/2;
currentY = canvas.height/2;
this.onkeydown = function(e) {
    old_keydown(e);
    83 != e.keyCode || (currentX = -100000); // S
    68 != e.keyCode || (currentY = 100000); // D
    69 != e.keyCode || (currentY = -100000); // E
    70 != e.keyCode || (currentX = 100000); // F
    old_mousemove({clientX: currentX, clientY: currentY});
}
this.onkeyup = function(e) {
    old_keyup(e);
    83 != e.keyCode || (currentX = canvas.width/2); // S 
    68 != e.keyCode || (currentY = canvas.height/2); // D 
    69 != e.keyCode || (currentY = canvas.height/2); // E 
    70 != e.keyCode || (currentX = canvas.width/2); // F 
    old_mousemove({clientX: currentX, clientY: currentY});
}
canvas.onmousemove = null;
alert("You're ready to play Agar.io with ESDF!");
a=document.getElementById("canvas"),b=this.onkeydown,c=this.onkeyup,d=a.onmousemove,e=a.width/2,f=a.height/2,this.onkeydown=function(g){b(g),83!=g.keyCode||(e=-100000),68!=g.keyCode||(f=100000),69!=g.keyCode||(f=-100000),70!=g.keyCode||(e=100000),d({clientX:e,clientY:f})},this.onkeyup=function(g){c(g),83!=g.keyCode||(e=a.width/2),68!=g.keyCode||(f=a.height/2),69!=g.keyCode||(f=a.height/2),70!=g.keyCode||(e=a.width/2),d({clientX:e,clientY:f})},a.onmousemove=null,alert("You're ready to play Agar.io with ESDF!");
