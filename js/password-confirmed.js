$(function(){

  // $("#passwordConfirm").click(function (){
  //   PassCheck();
  // });
  // !!!! -> trigger js funtion like this if you add any

  // PassCheck must be called in html to prevent jQuery from breaking. 
  $('#passwordConfirm').focusout(function(){
    let pass = $('#password').val();
    let pass2 = $('#passwordConfirm').val();

    let message = "Password fields must match. \nTry again.";

    if(pass != pass2){
        $("#submit").prop("disabled", true) ;
        alert(message);
    }


  });

});