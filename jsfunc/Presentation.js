//#######################################################//
//------------------INSTRUCTION SCREENS------------------//
//#######################################################//
let instructions_example = function (){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Today you will complete a simple task.",(myCanvas.width/2),(myCanvas.height/2)-250,400,20,"verdana");

  ctx.textAlign="left";
  text1 = wrapText(ctx,"You will see an image of a rock and need to decide what type of rock it is by clicking a button below. After you select your choice, you will receive feedback on whether your selection was correct or not. ",100,(myCanvas.height/2)-200,700,20,"verdana");
  text1 = wrapText(ctx,"Before you do this, however, in the following trials we will show you an example rock of each type. Please pay attention as you will need to use this information for the upcoming task.",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to begin, press the button below to see the example rocks.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Example").show().click(function(){stimscreencount = 1; $("#Example").hide(); countDown(3);});
};

let instructions = function (){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  //hide buttons
  $("#Granite").hide();
  $("#Obsidian").hide();
  $("#Pegmatite").hide();
  $("#Pumice").hide();
  $("#Amphibolite").hide();
  $("#Gneiss").hide();
  $("#Marble").hide();
  $("#Slate").hide();
  $("#Breccia").hide();
  $("#Conglomerate").hide();
  $("#RockGypsum").hide();
  $("#Sandstone").hide();
  $("#Start").hide();
  $("#Example").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Now you will complete a simple task.",(myCanvas.width/2),(myCanvas.height/2)-150,400,20,"verdana");

  ctx.textAlign="left";
  text1 = wrapText(ctx,"You will see an image of a rock and need to decide what type of rock it is by clicking a button below. After you select your choice, you will receive feedback on whether your selection was correct or not. ",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to begin, press the button below to begin.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Start").show().click(function(){stimscreencount = 1; $("#Start").hide(); countDown(3);});
};

let instructions1 = function (){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");

  //hide buttons
  $("#Granite").hide();
  $("#Obsidian").hide();
  $("#Pegmatite").hide();
  $("#Pumice").hide();
  $("#Amphibolite").hide();
  $("#Gneiss").hide();
  $("#Marble").hide();
  $("#Slate").hide();
  $("#Breccia").hide();
  $("#Conglomerate").hide();
  $("#RockGypsum").hide();
  $("#Sandstone").hide();
  $("#Start").hide();
  $("#Example").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.textAlign="left";
  text1 = wrapText(ctx,"You will now complete the next phase of the task. The rocks presented may or may not look different to the rocks you have just seen. Please do your best to identify them. You will no longer receive feedback on your choice.",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to begin, press the button below to continue the task.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Start").show().click(function(){stimscreencount = 1; $("#Start").hide(); countDown(3);});
};

let instructions2 = function (){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");

  //hide buttons
  $("#Granite").hide();
  $("#Obsidian").hide();
  $("#Pegmatite").hide();
  $("#Pumice").hide();
  $("#Amphibolite").hide();
  $("#Gneiss").hide();
  $("#Marble").hide();
  $("#Slate").hide();
  $("#Breccia").hide();
  $("#Conglomerate").hide();
  $("#RockGypsum").hide();
  $("#Sandstone").hide();
  $("#Start").hide();
  $("#Example").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.textAlign="left";
  text1 = wrapText(ctx,"This is a short break.",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to continue, press the button below.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Start").show().click(function(){stimscreencount = 1; $("#Start").hide(); countDown(3);});
};

//#######################################################//
//------------------LEARNING SCREENS---------------------//
//#######################################################//
function example_picture(object, interval){
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  ans = 99;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", i, onset, object, 9999, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;

  //draw image
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width/3)/2), myCanvas.height/2-((img[object].height/3)/2),img[object].width/3,img[object].height/3);

  //show buttons
  text = "Filler"
  switch(trialmatrix[3][i]){
    case 1:
    text = "Granite";
    break;
    case 2:
    text = "Obsidian";
    break;
    case 3:
    text = "Pegmatite";
    break;
    case 4:
    text = "Pumice";
    break;
    case 5:
    text = "Amphibolite";
    break;
    case 6:
    text = "Gneiss";
    break;
    case 7:
    text = "Marble";
    break;
    case 8:
    text = "Slate";
    break;
    case 9:
    text = "Breccia";
    break;
    case 10:
    text = "Conglomerate";
    break;
    case 11:
    text = "Rock Gypsum";
    break;
    case 12:
    text = "Sandstone";
    break;
  }
  wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/2)+200,400,50,"verdana");

  //timeout variable
  timeoutIMAGE = setInterval(iti_screen_nofeedback,interval);
};

//#######################################################//
//------------------EXPERIMENT SCREENS-------------------//
//#######################################################//

//-------------------Learning SCREENS--------------------//
function learn_picture(object, interval){
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  ans = 99;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", i, onset, object, 9999, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;

  //draw image
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width/3)/2), myCanvas.height/2-((img[object].height/3)/2),img[object].width/3,img[object].height/3);

  //show buttons
  $("#Granite").show().click(function(){if(stimscreencount == 0){ans=1;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Obsidian").show().click(function(){if(stimscreencount == 0){ans=2;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Pegmatite").show().click(function(){if(stimscreencount == 0){ans=3;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Pumice").show().click(function(){if(stimscreencount == 0){ans=4;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Amphibolite").show().click(function(){if(stimscreencount == 0){ans=5;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Gneiss").show().click(function(){if(stimscreencount == 0){ans=6;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Marble").show().click(function(){if(stimscreencount == 0){ans=7;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Slate").show().click(function(){if(stimscreencount == 0){ans=8;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Breccia").show().click(function(){if(stimscreencount == 0){ans=9;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Conglomerate").show().click(function(){if(stimscreencount == 0){ans=10;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#RockGypsum").show().click(function(){if(stimscreencount == 0){ans=11;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Sandstone").show().click(function(){if(stimscreencount == 0){ans=12;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});

  //timeout variable
  timeoutIMAGE = setInterval(iti_screen,interval);
};

//---------------------Test SCREENS----------------------//
function test_novel_picture(object, interval){
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", i, onset, object, 9999, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;

  //draw image
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width/3)/2), myCanvas.height/2-((img[object].height/3)/2),img[object].width/3,img[object].height/3);

  //show buttons
  $("#Granite").show().click(function(){if(stimscreencount == 0){ans=1;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Obsidian").show().click(function(){if(stimscreencount == 0){ans=2;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Pegmatite").show().click(function(){if(stimscreencount == 0){ans=3;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Pumice").show().click(function(){if(stimscreencount == 0){ans=4;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Amphibolite").show().click(function(){if(stimscreencount == 0){ans=5;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Gneiss").show().click(function(){if(stimscreencount == 0){ans=6;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Marble").show().click(function(){if(stimscreencount == 0){ans=7;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Slate").show().click(function(){if(stimscreencount == 0){ans=8;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Breccia").show().click(function(){if(stimscreencount == 0){ans=9;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Conglomerate").show().click(function(){if(stimscreencount == 0){ans=10;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#RockGypsum").show().click(function(){if(stimscreencount == 0){ans=11;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Sandstone").show().click(function(){if(stimscreencount == 0){ans=12;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});

  //timeout variable
  timeoutIMAGE = setInterval(iti_screen_nofeedback,interval);
};

function test_old_picture(object, interval){
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", i, onset, object, 9999, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;

  //draw image
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width/3)/2), myCanvas.height/2-((img[object].height/3)/2),img[object].width/3,img[object].height/3);

  //show buttons
  $("#Granite").show().click(function(){if(stimscreencount == 0){ans=1;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Obsidian").show().click(function(){if(stimscreencount == 0){ans=2;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Pegmatite").show().click(function(){if(stimscreencount == 0){ans=3;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Pumice").show().click(function(){if(stimscreencount == 0){ans=4;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Amphibolite").show().click(function(){if(stimscreencount == 0){ans=5;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Gneiss").show().click(function(){if(stimscreencount == 0){ans=6;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Marble").show().click(function(){if(stimscreencount == 0){ans=7;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Slate").show().click(function(){if(stimscreencount == 0){ans=8;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Breccia").show().click(function(){if(stimscreencount == 0){ans=9;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Conglomerate").show().click(function(){if(stimscreencount == 0){ans=10;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#RockGypsum").show().click(function(){if(stimscreencount == 0){ans=11;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});
  $("#Sandstone").show().click(function(){if(stimscreencount == 0){ans=12;data[logCounter] = ["SR:", i, onset, object, ans, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i]];
  logCounter++;iti_screen()}});

  //timeout variable
  timeoutIMAGE = setInterval(iti_screen_nofeedback,interval);
};

//#######################################################//
//------------------QUESTIONNAIRE SCREENS------------------//
//#######################################################//
let question1 = function(){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Think back to the first section of this experiment when you were first classifying different rocks.",(myCanvas.width/2),(myCanvas.height/2)-100,700,20,"verdana");
  text1 = wrapText(ctx,"Were you more focused on trying to memorize the objects or on establishing a classification rule?",(myCanvas.width/2),(myCanvas.height/2),700,20,"verdana");

  $("#Likert1").show().click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 1, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert2").show().click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 2, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert3").show().click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 3, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert4").show().click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 4, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert5").show().click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 5, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert6").show().click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 6, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert7").show().click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 7, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
}

let question2 = function(){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Think back to the third section of this experiment, right after you completed the clock task.",(myCanvas.width/2),(myCanvas.height/2)-100,700,20,"verdana");
  text1 = wrapText(ctx,"Were you more focused on trying to find similarities between these new rocks and the old rocks or on applying a classification rule?",(myCanvas.width/2),(myCanvas.height/2),700,20,"verdana");

  $("#Likert1").show().text('Always Found Similarities').click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 1, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert2").show().text('Usually Found Similarities').click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 2, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert3").show().text('Sometimes Found Similarities').click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 3, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert4").show().text('Unsure or Equally Both Strategies').click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 4, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert5").show().text('Somtimes Applied Rule').click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 5, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert6").show().text('Usually Applied Rule').click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 6, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert7").show().text('Always Applied Rule').click(function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 7, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i]];
  logCounter++;iti_screen_nofeedback()}});
}


//#######################################################//
//------------------ITI SCREENS------------------//
//#######################################################//

let iti_screen = function(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  clearInterval(timeoutIMAGE);
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/2),400,20,"verdana");

  text = "Filler"
  switch(trialmatrix[3][i]){
    case 1:
    text = "Granite";
    break;
    case 2:
    text = "Obsidian";
    break;
    case 3:
    text = "Pegmatite";
    break;
    case 4:
    text = "Pumice";
    break;
    case 5:
    text = "Amphibolite";
    break;
    case 6:
    text = "Gneiss";
    break;
    case 7:
    text = "Marble";
    break;
    case 8:
    text = "Slate";
    break;
    case 9:
    text = "Breccia";
    break;
    case 10:
    text = "Conglomerate";
    break;
    case 11:
    text = "Rock Gypsum";
    break;
    case 12:
    text = "Sandstone";
    break;
  }

  if (ans == trialmatrix[3][i]){
    wrapText(ctx,"Correct",(myCanvas.width/2),(myCanvas.height/2)-25,400,20,"verdana");
    wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/2)+25,400,20,"verdana");
  }
  else if (ans == 99){
    wrapText(ctx,"Too Slow",(myCanvas.width/2),(myCanvas.height/2)-25,400,20,"verdana");
    wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/2)+25,400,20,"verdana");
  }
  else {
    wrapText(ctx,"Incorrect",(myCanvas.width/2),(myCanvas.height/2)-25,400,20,"verdana");
    wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/2)+25,400,20,"verdana");
  }


  //timeout variable
  stimscreencount = 1;
  timeoutITI = setTimeout(runTrial,ITIinterval);
};

let iti_screen_nofeedback = function(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  clearInterval(timeoutIMAGE);
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/2),400,25,"verdana");

  //timeout variable
  stimscreencount = 1;
  timeoutITI = setTimeout(runTrial,ITIinterval);
};
