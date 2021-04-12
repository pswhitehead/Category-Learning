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

  $("#Example").show().on('click', function(){stimscreencount = 1; $("#Example").hide(); iti_screen_nofeedback();});
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
  $("#Start4").hide();
  $("#Start5").hide();
  $("#Start2").hide();
  $("#Start3").hide();
  $("#Example").hide();
  $("#Granite2").hide();
  $("#Obsidian2").hide();
  $("#Pegmatite2").hide();
  $("#Pumice2").hide();
  $("#Amphibolite2").hide();
  $("#Gneiss2").hide();
  $("#Marble2").hide();
  $("#Slate2").hide();
  $("#Breccia2").hide();
  $("#Conglomerate2").hide();
  $("#RockGypsum2").hide();
  $("#Sandstone2").hide();
  $("#Likert12").hide();
  $("#Likert22").hide();
  $("#Likert32").hide();
  $("#Likert42").hide();
  $("#Likert52").hide();
  $("#Likert62").hide();
  $("#Likert72").hide();
  $("#Likert82").hide();

  $("#Granite3").hide();
  $("#Obsidian3").hide();
  $("#Pegmatite3").hide();
  $("#Pumice3").hide();
  $("#Amphibolite3").hide();
  $("#Gneiss3").hide();
  $("#Marble3").hide();
  $("#Slate3").hide();
  $("#Breccia3").hide();
  $("#Conglomerate3").hide();
  $("#RockGypsum3").hide();
  $("#Sandstone3").hide();
  $("#Likert13").hide();
  $("#Likert23").hide();
  $("#Likert33").hide();
  $("#Likert43").hide();
  $("#Likert53").hide();
  $("#Likert63").hide();
  $("#Likert73").hide();
  $("#Likert83").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Now you will complete a simple task.",(myCanvas.width/2),(myCanvas.height/2)-150,400,20,"verdana");

  ctx.textAlign="left";
  text1 = wrapText(ctx,"You will see an image of a rock and need to decide what type of rock it is by clicking a button below. After you select your choice, you will receive feedback on whether your selection was correct or not. ",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to begin, press the button below to begin.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Start").show();
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
  $("#Start4").hide();
  $("#Start5").hide();
  $("#Start2").hide();
  $("#Start3").hide();
  $("#Example").hide();
  $("#Granite2").hide();
  $("#Obsidian2").hide();
  $("#Pegmatite2").hide();
  $("#Pumice2").hide();
  $("#Amphibolite2").hide();
  $("#Gneiss2").hide();
  $("#Marble2").hide();
  $("#Slate2").hide();
  $("#Breccia2").hide();
  $("#Conglomerate2").hide();
  $("#RockGypsum2").hide();
  $("#Sandstone2").hide();
  $("#Likert12").hide();
  $("#Likert22").hide();
  $("#Likert32").hide();
  $("#Likert42").hide();
  $("#Likert52").hide();
  $("#Likert62").hide();
  $("#Likert72").hide();
  $("#Likert82").hide();

  $("#Granite3").hide();
  $("#Obsidian3").hide();
  $("#Pegmatite3").hide();
  $("#Pumice3").hide();
  $("#Amphibolite3").hide();
  $("#Gneiss3").hide();
  $("#Marble3").hide();
  $("#Slate3").hide();
  $("#Breccia3").hide();
  $("#Conglomerate3").hide();
  $("#RockGypsum3").hide();
  $("#Sandstone3").hide();
  $("#Likert13").hide();
  $("#Likert23").hide();
  $("#Likert33").hide();
  $("#Likert43").hide();
  $("#Likert53").hide();
  $("#Likert63").hide();
  $("#Likert73").hide();
  $("#Likert83").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.textAlign="left";
  text1 = wrapText(ctx,"You will now complete the next phase of the task. The rocks presented may or may not look different to the rocks you have just seen. Please do your best to identify them. You will no longer receive feedback on your choice.",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to begin, press the button below to continue the task.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Start2").show();
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
  $("#Start4").hide();
  $("#Start5").hide();
  $("#Start2").hide();
  $("#Start3").hide();
  $("#Example").hide();
  $("#Granite2").hide();
  $("#Obsidian2").hide();
  $("#Pegmatite2").hide();
  $("#Pumice2").hide();
  $("#Amphibolite2").hide();
  $("#Gneiss2").hide();
  $("#Marble2").hide();
  $("#Slate2").hide();
  $("#Breccia2").hide();
  $("#Conglomerate2").hide();
  $("#RockGypsum2").hide();
  $("#Sandstone2").hide();
  $("#Likert12").hide();
  $("#Likert22").hide();
  $("#Likert32").hide();
  $("#Likert42").hide();
  $("#Likert52").hide();
  $("#Likert62").hide();
  $("#Likert72").hide();
  $("#Likert82").hide();

  $("#Granite3").hide();
  $("#Obsidian3").hide();
  $("#Pegmatite3").hide();
  $("#Pumice3").hide();
  $("#Amphibolite3").hide();
  $("#Gneiss3").hide();
  $("#Marble3").hide();
  $("#Slate3").hide();
  $("#Breccia3").hide();
  $("#Conglomerate3").hide();
  $("#RockGypsum3").hide();
  $("#Sandstone3").hide();
  $("#Likert13").hide();
  $("#Likert23").hide();
  $("#Likert33").hide();
  $("#Likert43").hide();
  $("#Likert53").hide();
  $("#Likert63").hide();
  $("#Likert73").hide();
  $("#Likert83").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.textAlign="left";
  text1 = wrapText(ctx,"This is a short break.",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to continue, press the button below.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Start3").show();
};


let instructions_question = function (){
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
  $("#Start4").hide();
  $("#Start5").hide();
  $("#Start2").hide();
  $("#Start3").hide();
  $("#Example").hide();
  $("#Granite2").hide();
  $("#Obsidian2").hide();
  $("#Pegmatite2").hide();
  $("#Pumice2").hide();
  $("#Amphibolite2").hide();
  $("#Gneiss2").hide();
  $("#Marble2").hide();
  $("#Slate2").hide();
  $("#Breccia2").hide();
  $("#Conglomerate2").hide();
  $("#RockGypsum2").hide();
  $("#Sandstone2").hide();
  $("#Likert12").hide();
  $("#Likert22").hide();
  $("#Likert32").hide();
  $("#Likert42").hide();
  $("#Likert52").hide();
  $("#Likert62").hide();
  $("#Likert72").hide();
  $("#Likert82").hide();


  $("#Granite3").hide();
  $("#Obsidian3").hide();
  $("#Pegmatite3").hide();
  $("#Pumice3").hide();
  $("#Amphibolite3").hide();
  $("#Gneiss3").hide();
  $("#Marble3").hide();
  $("#Slate3").hide();
  $("#Breccia3").hide();
  $("#Conglomerate3").hide();
  $("#RockGypsum3").hide();
  $("#Sandstone3").hide();
  $("#Likert13").hide();
  $("#Likert23").hide();
  $("#Likert33").hide();
  $("#Likert43").hide();
  $("#Likert53").hide();
  $("#Likert63").hide();
  $("#Likert73").hide();
  $("#Likert83").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.textAlign="left";
  text1 = wrapText(ctx,"You will now complete the next phase of the task. You will just need to answer some questions about yourself.",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to begin, press the button below to continue the task.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Start4").show();
};

let instructions_survey = function (){
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
  $("#Start2").hide();
  $("#Start3").hide();
  $("#Start4").hide();
  $("#Start5").hide();
  $("#Example").hide();
  $("#Granite2").hide();
  $("#Obsidian2").hide();
  $("#Pegmatite2").hide();
  $("#Pumice2").hide();
  $("#Amphibolite2").hide();
  $("#Gneiss2").hide();
  $("#Marble2").hide();
  $("#Slate2").hide();
  $("#Breccia2").hide();
  $("#Conglomerate2").hide();
  $("#RockGypsum2").hide();
  $("#Sandstone2").hide();
  $("#Likert12").hide();
  $("#Likert22").hide();
  $("#Likert32").hide();
  $("#Likert42").hide();
  $("#Likert52").hide();
  $("#Likert62").hide();
  $("#Likert72").hide();
  $("#Likert82").hide();

  $("#Granite3").hide();
  $("#Obsidian3").hide();
  $("#Pegmatite3").hide();
  $("#Pumice3").hide();
  $("#Amphibolite3").hide();
  $("#Gneiss3").hide();
  $("#Marble3").hide();
  $("#Slate3").hide();
  $("#Breccia3").hide();
  $("#Conglomerate3").hide();
  $("#RockGypsum3").hide();
  $("#Sandstone3").hide();
  $("#Likert13").hide();
  $("#Likert23").hide();
  $("#Likert33").hide();
  $("#Likert43").hide();
  $("#Likert53").hide();
  $("#Likert63").hide();
  $("#Likert73").hide();
  $("#Likert83").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.textAlign="left";
  text1 = wrapText(ctx,"You will now complete the final phase of the task. You will just need to answer some questions about yourself and your experience in the task.",100,(myCanvas.height/2)-100,700,20,"verdana");
  text2 = wrapText(ctx,"When you are ready to begin, press the button below to continue.",100,(myCanvas.height/2)+25,700,20,"verdana");

  $("#Start5").show();
};

//#######################################################//
//------------------LEARNING SCREENS---------------------//
//#######################################################//
let example_picture = function (object, interval){
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
  trialmatrix[4][i],9999, 9999];
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
  timeoutIMAGE = setTimeout(iti_screen_nofeedback,interval);
};

//#######################################################//
//------------------EXPERIMENT SCREENS-------------------//
//#######################################################//

//-------------------Learning SCREENS--------------------//
let learn_picture = function (object, interval){
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  ans = 99;
  object = object;
  $("#Start").hide();
  $("#Start2").hide();
  $("#Start3").hide();
  $("#Start4").hide();
  $("#Start5").hide();
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //hide buttons
  $("#Granite2").hide();
  $("#Obsidian2").hide();
  $("#Pegmatite2").hide();
  $("#Pumice2").hide();
  $("#Amphibolite2").hide();
  $("#Gneiss2").hide();
  $("#Marble2").hide();
  $("#Slate2").hide();
  $("#Breccia2").hide();
  $("#Conglomerate2").hide();
  $("#RockGypsum2").hide();
  $("#Sandstone2").hide();
  $("#Granite3").hide();
  $("#Obsidian3").hide();
  $("#Pegmatite3").hide();
  $("#Pumice3").hide();
  $("#Amphibolite3").hide();
  $("#Gneiss3").hide();
  $("#Marble3").hide();
  $("#Slate3").hide();
  $("#Breccia3").hide();
  $("#Conglomerate3").hide();
  $("#RockGypsum3").hide();
  $("#Sandstone3").hide();

  //show buttons
  $("#Granite").show();
  $("#Obsidian").show();
  $("#Pegmatite").show();
  $("#Pumice").show();
  $("#Amphibolite").show();
  $("#Gneiss").show();
  $("#Marble").show();
  $("#Slate").show();
  $("#Breccia").show();
  $("#Conglomerate").show();
  $("#RockGypsum").show();
  $("#Sandstone").show();

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", j, onset, object, 9999, 9999,
  1,trialmatrix_2[0][j],trialmatrix_2[1][j],trialmatrix_2[2][j],
  trialmatrix_2[3][j],9999, 9999];
  logCounter++;

  //draw image
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width/3)/2), myCanvas.height/2-((img[object].height/3)/2),img[object].width/3,img[object].height/3);

  //show buttons


  //timeout variable
  timeoutIMAGE = setTimeout(iti_screen_matchedlearning,interval);
};

//---------------------Test SCREENS----------------------//
let test_novel_picture = function (object, interval){
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  ans = 99;
  object = object;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

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
  $("#Granite3").hide();
  $("#Obsidian3").hide();
  $("#Pegmatite3").hide();
  $("#Pumice3").hide();
  $("#Amphibolite3").hide();
  $("#Gneiss3").hide();
  $("#Marble3").hide();
  $("#Slate3").hide();
  $("#Breccia3").hide();
  $("#Conglomerate3").hide();
  $("#RockGypsum3").hide();
  $("#Sandstone3").hide();

  //show buttons
  $("#Granite2").show();
  $("#Obsidian2").show();
  $("#Pegmatite2").show();
  $("#Pumice2").show();
  $("#Amphibolite2").show();
  $("#Gneiss2").show();
  $("#Marble2").show();
  $("#Slate2").show();
  $("#Breccia2").show();
  $("#Conglomerate2").show();
  $("#RockGypsum2").show();
  $("#Sandstone2").show();

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", i, onset, object, 9999, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i], trialmatrix[4][i],9999, 9999];
  logCounter++;

  //draw image
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width/3)/2), myCanvas.height/2-((img[object].height/3)/2),img[object].width/3,img[object].height/3);

  //timeout variable
  timeoutIMAGE = setTimeout(iti_screen_nofeedback,interval);
};

let test_old_picture = function (object, interval){
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  object = object;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

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
  $("#Granite2").hide();
  $("#Obsidian2").hide();
  $("#Pegmatite2").hide();
  $("#Pumice2").hide();
  $("#Amphibolite2").hide();
  $("#Gneiss2").hide();
  $("#Marble2").hide();
  $("#Slate2").hide();
  $("#Breccia2").hide();
  $("#Conglomerate2").hide();
  $("#RockGypsum2").hide();
  $("#Sandstone2").hide();

  //show buttons
  $("#Granite3").show();
  $("#Obsidian3").show();
  $("#Pegmatite3").show();
  $("#Pumice3").show();
  $("#Amphibolite3").show();
  $("#Gneiss3").show();
  $("#Marble3").show();
  $("#Slate3").show();
  $("#Breccia3").show();
  $("#Conglomerate3").show();
  $("#RockGypsum3").show();
  $("#Sandstone3").show();

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", i, onset, object, 9999, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  trialmatrix[4][i], 9999, 9999];
  logCounter++;

  //draw image
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width/3)/2), myCanvas.height/2-((img[object].height/3)/2),img[object].width/3,img[object].height/3);


  //timeout variable
  timeoutIMAGE = setTimeout(iti_screen_nofeedback,interval);
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

  $("#Likert1").show().on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 1, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert2").show().on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 2, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert3").show().on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 3, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert4").show().on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 4, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert5").show().on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 5, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert6").show().on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 6, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert7").show().on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ1:", i, 9999, 9999, 7, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
}

let question2 = function(){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  $("#Likert1").hide();
  $("#Likert2").hide();
  $("#Likert3").hide();
  $("#Likert4").hide();
  $("#Likert5").hide();
  $("#Likert6").hide();
  $("#Likert7").hide();
  $("#Likert8").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Think back to the third section of this experiment, right after you completed the survey task.",(myCanvas.width/2),(myCanvas.height/2)-100,700,20,"verdana");
  text1 = wrapText(ctx,"Were you more focused on trying to find similarities between these new rocks and the old rocks or on applying a classification rule?",(myCanvas.width/2),(myCanvas.height/2),700,20,"verdana");

  $("#Likert12").show().text('Always Found Similarities').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 1, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert22").show().text('Usually Found Similarities').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 2, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert32").show().text('Sometimes Found Similarities').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 3, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert42").show().text('Unsure or Equally Both Strategies').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 4, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert52").show().text('Somtimes Applied Rule').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 5, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert62").show().text('Usually Applied Rule').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 6, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert72").show().text('Always Applied Rule').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["PTQ2:", i, 9999, 9999, 7, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
}

let questionairre1 = function(question){
  type = 4;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,surveyquestions[question],(myCanvas.width/2),(myCanvas.height/2)-100,700,20,"verdana");

  $("#question1").show()

  $("#QUESTION1").show().text('Next Question').on('click', function(){
    answer_survey = document.getElementById("question1").value;
    if(stimscreencount == 0){
      data[logCounter] = ["Q1:", i, 9999, 9999, 9999, 9999,
      trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],question, answer_survey];
      logCounter++; document.getElementById('question1').value = ''; $("#question1").hide();$("#QUESTION1").hide();iti_screen_nofeedback()}});

}

let questionairre2 = function(question){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Read each of the following statements and decide how much you agree with each according to your attitudes, beliefs, and experiences. It is important for you to realize that there are no ‘right’ or ‘wrong’ answers to these questions. People are different, and we are interested in how you feel. ",(myCanvas.width/2),(myCanvas.height/2)-300,700,20,"verdana");

  text1 = wrapText(ctx,surveyquestions[question],(myCanvas.width/2),(myCanvas.height/2),700,20,"verdana");

  $("#Likert13").show().text('Strongly Disagree').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["Q2:", i, 9999, 9999, 1, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert23").show().text('Moderately Disagree').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["Q2:", i, 9999, 9999, 2, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert33").show().text('Slightly Disagree').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["Q2:", i, 9999, 9999, 3, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert43").show().text('Slightly Agree').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["Q2:", i, 9999, 9999, 4, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert53").show().text('Moderately Agree').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["Q2:", i, 9999, 9999, 5, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});
  $("#Likert63").show().text('Strongly Agree').on('click', function(){if(stimscreencount == 0){data[logCounter] = ["Q2:", i, 9999, 9999, 6, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i],9999, 9999];
  logCounter++;iti_screen_nofeedback()}});

}

let freeresp1 = function(question){
  type = 4;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  $("#Likert12").hide();
  $("#Likert22").hide();
  $("#Likert32").hide();
  $("#Likert42").hide();
  $("#Likert52").hide();
  $("#Likert62").hide();
  $("#Likert72").hide();
  $("#Likert82").hide();
  $("#Likert1").hide();
  $("#Likert2").hide();
  $("#Likert3").hide();
  $("#Likert4").hide();
  $("#Likert5").hide();
  $("#Likert6").hide();
  $("#Likert7").hide();
  $("#Likert8").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Think back to the first section of this experiment when you were first classifying different rocks.",(myCanvas.width/2),(myCanvas.height/2)-100,700,20,"verdana");
  text1 = wrapText(ctx,"In your own words, please briefly describe the strategy you used here to complete the task.",(myCanvas.width/2),(myCanvas.height/2),700,20,"verdana");

  $("#question2").show()

  $("#QUESTION2").show().text('Next Question').on('click', function(){
    answer_survey = document.getElementById("question2").value;
    if(stimscreencount == 0){
      data[logCounter] = ["Q2:", i, 9999, 9999, 9999, 9999,
      trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i], question, answer_survey];
      logCounter++; document.getElementById('question2').value; $("#question2").hide();$("#QUESTION2").hide();iti_screen_nofeedback()}});

}

let freeresp2 = function(question){
  type = 4;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

  $("#Likert12").hide();
  $("#Likert22").hide();
  $("#Likert32").hide();
  $("#Likert42").hide();
  $("#Likert52").hide();
  $("#Likert62").hide();
  $("#Likert72").hide();
  $("#Likert82").hide();
  $("#Likert1").hide();
  $("#Likert2").hide();
  $("#Likert3").hide();
  $("#Likert4").hide();
  $("#Likert5").hide();
  $("#Likert6").hide();
  $("#Likert7").hide();
  $("#Likert8").hide();

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Think back to the third section of this experiment, right after you completed the survey task.",(myCanvas.width/2),(myCanvas.height/2)-100,700,20,"verdana");
  text1 = wrapText(ctx,"In your own words, please briefly describe the strategy you used here to complete the task.",(myCanvas.width/2),(myCanvas.height/2),700,20,"verdana");

  $("#question3").show()

  $("#QUESTION3").show().text('Next Question').on('click', function(){
    answer_survey = document.getElementById("question3").value;
    if(stimscreencount == 0){
      data[logCounter] = ["Q3:", i, 9999, 9999, 9999, 9999,
      trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],trialmatrix[4][i], question, answer_survey];
      logCounter++; document.getElementById('question3').value; $("#question3").hide();$("#QUESTION3").hide();iti_screen_nofeedback()}});

}


//#######################################################//
//------------------ITI SCREENS------------------//
//#######################################################//

let iti_screen = function(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
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
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/2),400,25,"verdana");

  //timeout variable
  stimscreencount = 1;
  timeoutITI = setTimeout(runTrial,ITIinterval);
};

let iti_screen_matchedlearning_nofeedback = function(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/2),400,25,"verdana");

  //timeout variable
  stimscreencount = 1;
  timeoutITI = setTimeout(runTrial_matchedlearning,ITIinterval);
};

let iti_screen_matchedlearning = function(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/2),400,20,"verdana");

  text = "Filler"
  switch(trialmatrix_2[2][j]){
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

  if (ans == trialmatrix_2[2][j]){
    miniblock_right.push(1);
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
  timeoutITI = setTimeout(runTrial_matchedlearning,ITIinterval);
}
