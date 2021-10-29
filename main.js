var canvas=new fabric.Canvas("myCanvas");
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var imageobject= "";

function new_image(getimage)
{
	fabric.Image.fromURL(getimage,function(Img)
    {
        imageobject=Img;
        imageobject.scaleToWidth(block_image_width);
        imageobject.scaleToHeight(block_image_height);
        imageobject.set({top:block_y,left:block_x});
        canvas.add(imageobject);

     });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{ new_image("rr1.png");
		// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image("pr.png");
	}
	
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image("br.png");
	}
	
}

