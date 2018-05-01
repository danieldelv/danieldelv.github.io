// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared

// hint: parseInt

// hint: parseInt() or number input?

//another hint: in what other excerises have we needed to keep track of a total?

// function square () {
//    var inputNum = $("input").val();
//    var parsedNum = parseInt(inputNum);
//    var outputNum = parsedNum * parsedNum;

 //   $("#output").text(outputNum);
 //  }
total = 0

 $("#entry").submit(register)

function register () {
	event.preventDefault();
   	var inputNum = $("#newEntry").val(); 
    var parsedNum = parseInt(inputNum);
    var outputNum = parsedNum;
    total = total + parsedNum;
  $("#total").html(total);

  $("#newEntry").val("");
   } 

