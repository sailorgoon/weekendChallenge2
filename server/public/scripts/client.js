console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded')
    $(".calcButton").on('click', clickHandler)
    // $('#addBtn').on('click', addClickHandler);
    // $('#subtractBtn').on('click', subtractClickHandler);
    // $('#multiplyBtn').on('click', multiplyClickHandler);
    // $('#divideBtn').on('click', divideClickHandler);
    getAll();
    $("#clearBtn").on('click', clearAll)

}

function clickHandler() {
    console.log('in clickHandler');
    addToHistory($(this).text());
    // answerFinder();
}




//  function answerFinder(){
//     if($('#operator').val() == "+"){
//         const answer = Number($('#number1').val()) + Number($('#number2').val());
//         $('#answerSpan').text( answer );
//     console.log( answer );
//     }

//     else if($('#operator').val() == "*"){
//         const answer = Number($('#number1').val()) * Number($('#number2').val());
//         $('#answerSpan').text( answer );
//     }

//     else if($('#operator').val() == "-"){
//         const answer = Number($('#number1').val()) - Number($('#number2').val());
//         $('#answerSpan').text( answer );
//     }

//     else if($('#operator').val() == "/"){
//         const answer = Number($('#number1').val()) / Number($('#number2').val());
//         $('#answerSpan').text( answer );
//     }
//  }


function getAll() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    })

        .then(function (response) {
            console.log(response);
            $('#outputDiv').empty();
            response.forEach(function (calc) {
                $('#outputDiv').prepend('<p>' + calc + '</p>');
            });
        });
}

function addToHistory(type) {
    console.log(type);
    let newCalc = {
        x: $('#number1').val(),
        y: $('#number2').val(),
        type: type
    }


    $.ajax({
        method: 'POST',
        url: '/addToHistory',
        data: newCalc
    })
        .then(function (response) {
            console.log(response)
            getAll();
        });
}

function clearAll() {
    $('#outputDiv').text('');
    $('input').val('');


    $.ajax({
        method: 'GET',
        url: '/clear-all'
    })

        .then(function (response) {
            console.log(response);
        });
}