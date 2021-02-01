//#######################################################//
//-----------------------RUN EXPERIMENT------------------//
//#######################################################//
let runTrial = function (){
  timeoutITI = null;
  clearTimeout(timeoutITI);
  if (trialcount < totallength){

    //Present the the object pictures and instructions per block
    if (stimscreencount == 0){checkSize();
      if (checkwindowsize == 0) {
        //instruction screens
        if (trialmatrix[0][i] == 99){
              instructions_example();
            }
        else if (trialmatrix[0][i] == 100){
              instructions();
            }
        else if (trialmatrix[0][i] == 101){
              instructions_question();
            }
        else if (trialmatrix[0][i] == 102){
              $("#Likert1").hide();
              $("#Likert2").hide();
              $("#Likert3").hide();
              $("#Likert4").hide();
              $("#Likert5").hide();
              $("#Likert6").hide();
              $("#Likert7").hide();
              $("#Likert8").hide();
              instructions1();
            }
        else if (trialmatrix[0][i] == 103){
              instructions2();
            }
        else if (trialmatrix[0][i] == 104){
              instructions_survey();
            }
        //experimental screens
        else if (trialmatrix[0][i] == 0){
              example_picture(trialmatrix[1][i], IMAGEinterval);
            }
        else if (trialmatrix[0][i] == 1){
              learn_picture(trialmatrix[1][i], IMAGEinterval);
            }
        else if (trialmatrix[0][i] == 2){
              questionairre1(trialmatrix[1][i]);
            }
        else if (trialmatrix[0][i] == 3){
              questionairre2(trialmatrix[1][i]);
            }
        else if (trialmatrix[0][i] == 4){
              test_novel_picture(trialmatrix[1][i], IMAGEinterval);
            }
        else if (trialmatrix[0][i] == 5){
              test_old_picture(trialmatrix[1][i], IMAGEinterval);
            }
        else if (trialmatrix[0][i] == 6){
              question1();
            }
        else if (trialmatrix[0][i] == 7){
              freeresp1();
            }
        else if (trialmatrix[0][i] == 8){
              question1();
            }
        else if (trialmatrix[0][i] == 9){
              freeresp2();
            }
          }
      else if (checkwindowsize == 1) {nonfullscreen();}}

    else if (stimscreencount == 1){
      stimscreencount = 0; i++; trialcount++; acctotalcount++; instructionson = 0;
      runTrial();}
        }
  else {
    //alert(data.join(";"));
    $("#info").css("color","white");
    //$("#info").show();
    $("#info").text(data.join(";"));
    //$("#mturk_form").show();
    $("#RTs", opener.window.document).val(data.join(";"));
    opener.updateMainMenu(3);
    JavaScript:window.close();
  }
};
