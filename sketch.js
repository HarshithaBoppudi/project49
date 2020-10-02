var gameState="start"
var getStarted,start_image,tought,tought_image;
var quiz,quiz_image,ye1,yesImage,no1,noImage,yes2,no2,yes3,no3,yes4,no4,yes5,no5;
var count=0 , score=0,display,display_image
var image1,image1_img,image2,image2_img,image3,image3_img;
var image4,image4_img,image5,image5_img;
var display1,display_image1,prevent,prevent_image,chat,chat_image,input1,chat1
var database, chatofperson2,message,message2
var advice,advice_image,next,next_image;
var CHATOFPERSON1,ok,pointer;
var back,back_img, background_img ,peace,gameicon,gameimage,gameback;
var buttonsound;
var buddhaback;
var tips2,tips2_image
var backgr_image;
function preload(){
  start_image=loadImage("getstarted.png");
  tought_image=loadImage("tought1.png");
  quiz_image=loadImage("quiz.png");
  yesImage=loadImage("yes.png")
  noImage=loadImage("no.png");
  display_image=loadImage("display.png")
image1_img=loadImage("image1.png")
image2_img=loadImage("image2.png")
image3_img=loadImage("image3.png")
image4_img=loadImage("image4.png")
image5_img=loadImage("image5.png")
display_image1=loadImage("roseimage.png")
prevent_image=loadImage("prevent1.png");
chat_image=loadImage("pen.png");

back_img=loadImage("back.jpg");
next_image=loadImage("Next.png")
background_img=loadImage("buddhaimage.png")
peace=loadImage("peace1.png")
gameimage=loadImage("gameicon.png")
gameback=loadImage("gamebackground.png")
buddhaback=loadImage("buddhaback.png")
buttonsound=loadSound("button-3.mp3")
tips2_image=loadImage("tips2.png")
backgr_image=loadImage("backgr.png")
}

function setup() {
  database=firebase.database();

  createCanvas(displayWidth-20,displayHeight-80);

tought=createSprite(displayWidth/2,displayHeight/2,1,1)

 getStarted= createSprite(displayWidth/1-400,displayHeight/2+200,1,1);
  quiz=createSprite(displayWidth/2-350,500,1,1);
pointer=createSprite(100,100,1,1)

image1=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
yes1=createSprite(displayWidth/2-170,displayHeight/2+40,1,1)
no1=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)
  
 image2=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes2=createSprite(displayWidth/2-50,displayHeight/2+40,1,1)
  no2=createSprite(displayWidth/2+50,displayHeight/2+40,1,1)

image3=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes3=createSprite(displayWidth/2-150,displayHeight/2+40,1,1)
  no3=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)

image4=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes4=createSprite(displayWidth/2-50,displayHeight/2+40,1,1)
  no4=createSprite(displayWidth/2+50,displayHeight/2+40,1,1)


  image5=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes5=createSprite(displayWidth/2-150,displayHeight/2+40,1,1)
  no5=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)

  prevent=createSprite(displayWidth/2-300,displayHeight/2-70,1,1)
 chat=createSprite(displayWidth/2-50,500,1,1)

 input1=createInput();
tips2=createSprite(displayWidth/2-300,displayHeight/2-20,1,1)
 back=createSprite(800,650,1,1);
 next=createSprite(1000,600,1,1)
 gameicon=createSprite(1200,600,1,1)
}

function draw() {
  background(222); 
  pointer.x=mouseX;
  pointer.y=mouseY;
  if(gameState==="start"){
    background(backgr_image)
    getStarted.addImage(start_image);
    tought.addImage(tought_image)
    if(mousePressedOver(getStarted)){
      buttonsound.play()
      gameState="screen1"
    }
  }
  if(gameState==="screen1"){
    getStarted.destroy();
    tought.destroy();
   
    quiz.addImage(quiz_image);
    quiz.scale=0.27
    background(display_image1);
   fill("blue")
    textSize(30)
    text("Hi Friend,Do you feel Depressed !",120,100)
    text("Do not worry, here are  some tips and suggestions to feel better  ",120,150)
    text("Dear Friend please click on Quiz icon to attend our quiz ",120,200)
    text("and get tips acoording to the level of depression ",120,250)
    text("The best way to reduce your pain is expressing yourself,",120,300)
    text("please click on pen icon and express your feelings to will feel much better ",120,350)
    if(mousePressedOver(quiz)){
      buttonsound.play()
      gameState="quiz"
    }
    chat.addImage(chat_image);
    chat.scale=0.382;


    if(mousePressedOver(chat)){
      buttonsound.play()
      quiz.visible=false;
      chat.destroy();
    
      gameState="chat"
    }
  }
  if(gameState==="quiz"){
    chat.destroy();
    quiz.destroy();
    background(display_image);
    textSize(20);
    
    image1.addImage(image1_img)
    yes1.addImage(yesImage)
    yes1.scale=0.05
    no1.addImage(noImage)
    no1.scale=0.3

    if(pointer.isTouching(yes1)){
      buttonsound.play()
      yes1.destroy();
      no1.destroy();
      image1.destroy();
      image2.addImage(image2_img)
      yes2.addImage(yesImage)
      yes2.scale=0.05
      no2.addImage(noImage)
      no2.scale=0.3

     // string="a"
      
     
        count=count+1
        console.log(count);
      
      
    }
    if(pointer.isTouching(no1)){
      buttonsound.play()
      yes1.destroy();
      no1.destroy();
      image1.destroy();
      image2.addImage(image2_img)
      yes2.addImage(yesImage)
      yes2.scale=0.05
      no2.addImage(noImage)
      no2.scale=0.3
      score=score+1
      console.log(score)
    }
    if(pointer.isTouching(yes2)){
      buttonsound.play()
      yes2.destroy();
      no2.destroy();
      image2.destroy();
      image3.addImage(image3_img)
      yes3.addImage(yesImage)
      yes3.scale=0.05
      no3.addImage(noImage)
      no3.scale=0.3
    //  string="b"
      
        count=count+1
        console.log(count);
      
     
    }
  
    if(pointer.isTouching(no2)){
      buttonsound.play()
      yes2.destroy();
      no2.destroy();
      image2.destroy();
      image3.addImage(image3_img)
      yes3.addImage(yesImage)
      yes3.scale=0.05
      no3.addImage(noImage)
      no3.scale=0.3
      score=score+1
      console.log(score)
    }
    if(pointer.isTouching(yes3)){
      buttonsound.play()
      yes3.destroy();
      no3.destroy();
      image3.destroy();
      image4.addImage(image4_img)
      yes4.addImage(yesImage)
      yes4.scale=0.05
      no4.addImage(noImage)
      no4.scale=0.3
     
     
        count=count+1
        console.log(count);
      
     
    }
    if(pointer.isTouching(no3)){
      buttonsound.play()
      yes3.destroy();
      no3.destroy();
      image3.destroy();
      image4.addImage(image4_img)
      yes4.addImage(yesImage)
      yes4.scale=0.05
      no4.addImage(noImage)
      no4.scale=0.3
      score=score+1
      console.log(score)
    }

    if(pointer.isTouching(yes4)){
      buttonsound.play()
      yes4.destroy();
      no4.destroy();
      image4.destroy();
      image5.addImage(image5_img)
      yes5.addImage(yesImage)
      yes5.scale=0.05
      no5.addImage(noImage)
      no5.scale=0.3
      
     
        count=count+1
        console.log(count);
      
     
    }

    if(pointer.isTouching(no4)){
      buttonsound.play()
      yes4.destroy();
      no4.destroy();
      image4.destroy();
      image5.addImage(image5_img);
      yes5.addImage(yesImage);
      yes5.scale=0.05;
      no5.addImage(noImage);
      no5.scale=0.3;
      score=score+1;
      console.log(score);
    }
    if(pointer.isTouching(yes5)){
      buttonsound.play()
      yes5.destroy();
      no5.destroy();
      image5.destroy();
     
     
        count=count+1;
        console.log(count);
     
      }
      if(count>=3){
        background(0)
        gameState="tips1"
        
    }

    if(pointer.isTouching(no5)){
      buttonsound.play()
      yes5.destroy();
      no5.destroy();
      image5.destroy();
      score=score+1
      console.log(score)
     
     
    }
    if(score>=3){
      background(0)
      gameState="tips2"
    }

  }
  if(gameState==="tips2"){
    background(buddhaback);
    textSize(30)
    fill("purple")
    text("You acutally need not worry as your level of depression is not that bad",100,80)
    text("here we are going to provide you some tips so that you can  ",100,130)
    text("come out of your oddities",100,180)
    tips2.addImage(tips2_image)
    yes4.destroy();
no4.destroy();
image4.destroy();
    yes5.destroy();
no5.destroy();
image5.destroy();
  }
if(gameState==="tips1"){
  background(peace)
prevent.addImage(prevent_image);
prevent.scale=1.1
fill("white")
textSize(30)
text("if you are not still satisified  ",800,150)
text("you can press the next icon",800,200)
text("where you can get the details ",800,250)
text("of an expert and get good suggestions",800,300)
yes5.destroy();
no5.destroy();
yes4.destroy();
no4.destroy();
image4.destroy();
image5.destroy();
next.addImage(next_image)
next.scale=0.2

}

if(mousePressedOver(next)){
  buttonsound.play()
  next.destroy();
  prevent.destroy()
  gameState="expert"
}

if(gameState==="expert"){
  background(background_img)
  gameicon.addImage(gameimage)
  fill("maroon")
  textSize(30)
  text("if you are still not convinced or stress relifed you can have a chance to talk ",100,100)
  text("with an expert so that you can change your mindset",100,140)
  text("the experts name is Bhanu",100,180)
  text("Name:Bhanu,",100,220)
  text("his mail id is",100,270)
  text("MAIL ID:bhanumandada@yahoo.com",100,330 )
  text("if you are interested to play games to burst out all",100,550)
  text("your stress , press the game icon to play games",100,600)
}
if(mousePressedOver(gameicon)){
  buttonsound.play()
  gameicon.destroy()
  background(0)
  gameState="game"
}
if(gameState==="game"){
  background(gameback);
  fill("purple")
  textSize(30)
  text("Here are some game links for you ",100,90)
  text("you can copy the links and play the games:-",100,150)
  text("TrexGame: ",100,200)
  text("https://editor.p5js.org/bharshitha24/present/68_110L6B",100,240)
  text("virtual bubble wrap remix:",100,280)
  text("https://scratch.mit.edu/projects/62624316/remixes/",100,330)
  fill("red")
  text("THANK YOU FOR USING THIS APP",500,500)
}

if(gameState==="chat"){
  background("chocolate")
input1.position(200,100)

message=input1.value()
textSize(30)
fill("black")

text("express your self: ",100,170)
text(message,300,200);

back.addImage(back_img);
back.scale=0.3
if(mousePressedOver(back)){
  buttonsound.play()
  gameState="screen1"
  
  quiz.visible=true;

  back.destroy();
  input1.hide();
}


}

 

    
  
  drawSprites();
  
}
 function getchat1(){

  var chatinfo = database.ref('person1/chat');
  chatinfo.on("value",(data)=>{
    CHATOFPERSON1= data.val();
  })

}




  function updateChat(message){
    database.ref('person1').update({
      chat:message
    })
  }

 

