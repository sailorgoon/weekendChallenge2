console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded')
    $('#submitBtn').on('click', clickHandler);
    getAll();
}

function clickHandler(){
    console.log('in clickHandler');
    addNew();
}

function getAll(){
    $.ajax({
        method: 'GET',
        url: '/calculations'
    })

    .then(function(response) {
        console.log(response);
        // $('#outputDiv').empty();
        response.forEach(function(calc){
            $('#outputDiv').prepend(`<p>${calc.x} ${calc.type} ${calc.y}`);
        });
    });
}

function addNew(){
const newCalc = {
    x: $('#number1').val(),
    y: $('#number2').val(),
    type: $('#operator').val()
};
console.log('new calc object', newCalc);

$.ajax({
    method: 'POST',
    url: '/addCalc',
    data: newCalc
})
.then(function(response){
    console.log(response)
    getAll();
});
}
