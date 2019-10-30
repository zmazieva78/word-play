$(function() {


  $("#submitButton").click(function() {
    var userInput = $("input.form-control").val();
    var words = userInput.split(" ");
    console.log(words[2]);
    var chars = userInput.split("");
    console.log(chars[8]);
    var inputArrayCopy = userInput.split();
    console.log(inputArrayCopy);
    var reversedWords = words.reverse();

    var str = "";

    reversedWords.forEach(function(item){
      str = str + item + " ";
    });

    $("ul").text(str);

  });


});
