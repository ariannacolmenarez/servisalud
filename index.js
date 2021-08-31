
var specifyimage=new Array() 

specifyimage[0]="./img/img.png"

specifyimage[1]="./img/img2.png"

specifyimage[2]="./img/img3.png"

specifyimage[3]="img/img4.png"

specifyimage[4]="img/img5.png"


var delay=3000 //3 seconds

 

//Counter for array 

var count =1;

 

var cubeimage=new Array()

for (i=0;i<specifyimage.length;i++){

cubeimage[i]=new Image()

cubeimage[i].src=specifyimage[i]

}

 

function movecube(){

if (window.createPopup)

cube.filters[0].apply()

document.images.cube.src=cubeimage[count].src;

if (window.createPopup)

cube.filters[0].play()

count++;

if (count==cubeimage.length)

count=0;

setTimeout("movecube()",delay)

}

 

window.onload=new Function("setTimeout('movecube()',delay)");



