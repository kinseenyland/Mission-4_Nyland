// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#calcbtn').click(function (event) {

    event.preventDefault();

    let hours = parseInt($('#hours').val());

    if (isNaN(hours) || hours <= 0 || hours === null) {
        alert("Please enter a valid number of hours.");
        return;
    }

    let hourlyRate = parseFloat($('#hourly-rate').val().replace('$', ''));

    let total = hours * hourlyRate;

    $('#total').val('$' + total.toFixed(2));
});