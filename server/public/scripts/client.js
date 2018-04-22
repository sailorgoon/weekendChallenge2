console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded')
    $('#submitBtn').on('click', clickHandler);
}

function clickHandler(){
    console.log('in clickHandler');
    prependToDom();
}

function prependToDom(){
    $('#outputDiv').prepend("<p>" + $('#number1').val() +
    $('#operator').val() +
    $('#number2').val() + " =" + "</p>")
}