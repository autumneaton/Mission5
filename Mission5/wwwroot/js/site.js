// This first line ensures that it's run after the html has been fully loaded, thanks chatgpt :)
$(document).ready(function () {
    $("#calculateTotalButton").click(function () {
        // Get values from the html form
        let hours = parseFloat($("#hours").val());
        let hourlyRate = parseFloat($("#hourlyRate").val().replace("$", ""));

        // Make sure they put in a positive number of hours as well as it's actually a number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a positive number of hours.");
            return;
        }

        // Calculate total
        let total = hours * hourlyRate;

        // Display total with 2 decimal places for fun
        $("#total").text("$" + total.toFixed(2));
    });
});