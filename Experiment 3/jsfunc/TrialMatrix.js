//#######################################################//
//-----------------------LOAD IMAGES---------------------//
//#######################################################//
let loadImage = function ()
{
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  ctx.font="bold 45px Arial";

  wrapText(ctx,"The task is loading. Please wait.",(myCanvas.width/2),(myCanvas.height/2)-25,400,20,"verdana");
  ctx.fillText(Math.round((imgCount/fileName.length)*100)+"%", (myCanvas.width/2), (myCanvas.height/2)+25);


  if (imgCount < fileName.length)
  {
    img[imgCount] = new Image();
    img[imgCount].src=fileName[imgCount];
    img[imgCount].onload=loadImage;
    imgCount++;
  }
  else{

    random_img = []
    for (var g=0;g< fileName.length;g++) {
      random_img.push(g);
    }

    shuffle(random_img);
    createTrialMatrix();
  }
}


//#######################################################//
//-----------------------TRIAL MATRIX--------------------//
//#######################################################//

let createTrialMatrix = function(){

//create structure for final arrays
images_final = []
images_version_final = []
image_types_final = []
image_context_final = []
stage = []

//instruction SCREENS
example_instruct = [99]
initial_instruct = [100]
question_instruct = [101]
novel_instruct = [102]
studied_instruct = [103]
survey_instruct = [104]

//make the survey and question vectors
question_num = []
for (g = 0; g < 19; g++){
  question_num.push(g)
}

survey_num = []
for (g = 0; g < 4; g++){
  survey_num.push(g)
}

//which items will we choose?
items = [1,2,3,4,5,6,7,8,9,10,11,12]
shuffle(items)

example_items = [items[9]]
study_context = [0] //between subs study context
test_context = [1,0]
test_items = [items[3],items[4],items[5],items[6]]

//make the vectors for images and information in study and test
example_images = []
example_image_types = []
example_image_versions = []
example_image_context = []
for (g = 0; g < img.length; g++){
  if (image_context[g] == study_context[0]){
    if (example_items.indexOf(image_version[g]) != -1){
      example_images.push(g);
      example_image_types.push(image_type[g]);
      example_image_versions.push(image_version[g]);
      example_image_context.push(image_context[g]);
    }
  }
}


study_images2 = []
study_image_types2 = []
study_image_versions2 = []
study_image_context2 = []
for (g = 0; g < img.length; g++){
  if (image_context[g] == test_context[0] || image_context[g] == test_context[1]){
    if (test_items.indexOf(image_version[g]) != -1){
      study_images2.push(g);
      study_image_types2.push(image_type[g]);
      study_image_versions2.push(image_version[g]);
      study_image_context2.push(image_context[g]);
    }
  }
}

//shuffle these arrays for the study2 images
shuffleorder = []
for (g = 0; g < study_images2.length; g++){
  shuffleorder.push(g)
}
shuffle(shuffleorder)

study2_length = study_images2.length
for (g = 0; g < study2_length; g++){
  study_images2.push(study_images2[shuffleorder[g]]); study_image_types2.push(study_image_types2[shuffleorder[g]]);
  study_image_versions2.push(study_image_versions2[shuffleorder[g]]); study_image_context2.push(study_image_context2[shuffleorder[g]]);
}
study_images2.splice(0, study2_length);
study_image_versions2.splice(0, study2_length);
study_image_types2.splice(0, study2_length);
study_image_context2.splice(0, study2_length);

//concat these arrays
images_final = images_final.concat(example_instruct.concat(example_images.concat(initial_instruct.concat(question_instruct.concat(question_num.concat(studied_instruct.concat(study_images2.concat(survey_instruct.concat(survey_num)))))))))
images_version_final = images_version_final.concat(example_instruct.concat(example_image_versions.concat(initial_instruct.concat(question_instruct.concat(question_num.concat(studied_instruct.concat(study_image_versions2.concat(survey_instruct.concat(survey_num)))))))))
image_types_final = image_types_final.concat(example_instruct.concat(example_image_types.concat(initial_instruct.concat(question_instruct.concat(question_num.concat(studied_instruct.concat(study_image_types2.concat(survey_instruct.concat(survey_num)))))))))
image_context_final = image_context_final.concat(example_instruct.concat(example_image_context.concat(initial_instruct.concat(question_instruct.concat(question_num.concat(studied_instruct.concat(study_image_context2.concat(survey_instruct.concat(survey_num)))))))))

//create an array for the stage
for (g = 0; g < totallength; g++){
  //instructions for rock exmaples
  if (g == 0){
    stage.push(99)
  }
  //rock examples
  if (g > 0 & g < 13){
    stage.push(0)
  }
  //instructions for learning phase
  if (g == 13){
    stage.push(100)
  }
  //instructions for questionairres
  if (g == 14){
    stage.push(101)
  }
  //the questionairre #1
  if (g > 14 & g < 22){
    stage.push(2)
  }
  //the questionairre #2
  if (g > 21 & g < 34){
    stage.push(3)
  }
  //instructions pre study repeat phase
  if (g == 34){
    stage.push(102)
  }
  //repeat studied examples of rocks
  if (g > 34 & g < 131){
    stage.push(4)
  }
  //questionairre study
  if (g == 131){
    stage.push(104)
  }
  //first strategy likert
  if (g == 132){
    stage.push(6)
  }
  //first strategy free resp
  if (g == 133){
    stage.push(7)
  }
  //second strategy likert
  if (g == 134){
    stage.push(8)
  }
  //second strategy free resp
  if (g == 135){
    stage.push(9)
  }
}

//slip em in to a trial MATRIX
trialmatrix = [stage, images_final,images_version_final,image_types_final,image_context_final]


//#######################################################//
//--------------------MAKE THE #2 MATRIX-----------------//
//#######################################################//

study_items = [items[0],items[1],items[7],items[8],
              items[10],items[11],items[2]]


study_images = []
study_image_types = []
study_image_versions = []
study_image_context = []

for (k = 1; k < 13; k++){
  shuffle(study_items)
  for (g = 0; g < img.length; g++){
    if(image_type[g] == k){
      if (image_context[g] == study_context[0]){
        if (image_version[g] == study_items[0]){
          study_images.push(g);
          study_image_types.push(image_type[g]);
          study_image_versions.push(image_version[g]);
          study_image_context.push(image_context[g]);
        }
      }
    }
  }
}

study_images_final = []
study_image_types_final = []
study_image_versions_final = []
study_image_context_final = []
random_vector = [0,1,2,3,4,5,6,7,8,9,10,11]

for (g = 0; g < 50; g++){
  checkrandomization = 1
  while(checkrandomization == 1){
    shuffle(random_vector)
    if(study_images[random_vector[0]] != study_images_final[-1]){
      checkrandomization = 0
    }
  }
  for (k = 0; k < 12; k++){
    study_images_final.push(study_images[random_vector[k]])
    study_image_types_final.push(study_image_types[random_vector[k]])
    study_image_versions_final.push(study_image_versions[random_vector[k]])
    study_image_context_final.push(study_image_context[random_vector[k]])
  }
}


trialmatrix_2 = [study_images_final,study_image_versions_final,study_image_types_final,study_image_context_final]

//now let's run the trial/task
runTrial();}
