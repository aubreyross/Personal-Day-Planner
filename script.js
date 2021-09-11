var timeDisplayEl = $('#currentDay');
var saveBtnEl= $(".saveBtn")

//displays the current time and date using moment.js//
function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(currentTime);
  }
  
setInterval(displayTime, 1000);

//event listener for save button//
$(document).ready(function () {
    saveBtnEl.on("click", function () {
        var text = $(this).siblings(".description").val();
        var rowHour = $(this).parent().attr("id");

        localStorage.setItem(rowHour, text);
    });

    
   //In HTML each row was given an ID that represented the hour. This function compares the row hour to the current hour to determine past, present, or future.
   //Grey is past, light blue is present, dark blue is future
    function colorBlock() {
        var currentHour = moment().hour();


        $(".time-block").each(function () {
            var rowHour = parseInt($(this).attr("id").split("hour")[1]);

            if (rowHour < currentHour) {
                $(this).addClass("past");
            }
            else if (rowHour === currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");

            }
        })
    }

    //localStorage//
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    colorBlock();
})

