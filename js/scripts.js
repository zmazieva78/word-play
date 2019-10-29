$(function() {


  $("#submitButton").click(function() {
    var userInput = $("input.form-control").val();
    var word = userInput.split(" ");
    console.log(word);
    // var char = userInput.split("");
    // console.log(char[8]);
    // var inputArrayCopy = userInput.split();
    // console.log(inputArrayCopy);
    // // var char = inputArray.


    $("ul").text(word.reverse() + " ");

  });


});
