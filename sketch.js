

function preload(){
    
}

function setup(){
  createCanvas(400,700) 
    umbralla=new umbralla(200,200,20,20)
}

function draw(){
   umbralla.display();
   var maxDrops=100;
   
   for(var i=0;i<maxDrops;i++){
       Drops.push(new createDrop(random(0,400),random(0,400)));
   }
}   

