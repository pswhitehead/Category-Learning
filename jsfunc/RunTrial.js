//#######################################################//
//-----------------------RUN EXPERIMENT------------------//
//#######################################################//
let runTrial = function (){
  if (trialcount < totallength){

    //Present the the object pictures and instructions per block
    if (stimscreencount == 0){checkSize();
      if (checkwindowsize == 0) {
        if (trialmatrix[0][i] == 99){
              instructions_example();
            }
        if (trialmatrix[0][i] == 100){
              instructions();
            }
        if (trialmatrix[0][i] == 101){
              instructions1();
            }
        if (trialmatrix[0][i] == 102){
              instructions2();
            }
        if (trialmatrix[0][i] == 42){
              example_picture(trialmatrix[1][i], IMAGEinterval);
            }
        if (trialmatrix[0][i] == 0){
              learn_picture(trialmatrix[1][i], IMAGEinterval);
            }
        if (trialmatrix[0][i] == 1){
              test_novel_picture(trialmatrix[1][i], IMAGEinterval);
            }
        if (trialmatrix[0][i] == 2){
              test_old_picture(trialmatrix[1][i], IMAGEinterval);
            }
        if (trialmatrix[0][i] == 66){
              question1();
            }
        if (trialmatrix[0][i] == 67){
              question1();
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
