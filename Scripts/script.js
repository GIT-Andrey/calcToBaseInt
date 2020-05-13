let inputVal = '';


$("#b0").mousedown(function () {
    btnClicked('1');
});
$("#b1").mousedown(function () {
    btnClicked('2');
});
$("#b2").mousedown(function () {
    btnClicked('3');
});
$("#b3").mousedown(function () {
    btnClicked('4');
});
$("#b4").mousedown(function () {
    btnClicked('5');
});
$("#b5").mousedown(function () {
    btnClicked('6');
});
$("#b6").mousedown(function () {
    btnClicked('7');
});
$("#b7").mousedown(function () {
    btnClicked('8');
});
$("#b8").mousedown(function () {
    btnClicked('9');
});
$("#b9").mousedown(function () {
    btnClicked('0');
});
$("#b10").mousedown(function () {
    btnClicked('.');
});
$(".rezult").mousedown(function () {
    let copyText = $(".mainRezult").text();
    copyText += ' * 10^';
    copyText += $(".topRezult").text();
    btnClicked('', true);
    navigator.clipboard.writeText(copyText);
});
$("#b11").mousedown(function () {
    btnClicked('go', true);
});



function btnClicked(arg, del = false) {
    if (!del) {
        inputVal += arg;
        $(".mainRezult").text(inputVal);
        $(".cross").text('');
        $(".st").text('');
        $(".topRezult").text('');
    } else {
        $(".mainRezult").text('');
        $(".cross").text('');
        $(".st").text('');
        $(".topRezult").text('');

        if (arg == 'go') {
            inputValFloat = parseFloat(inputVal);
            if (parseInt(inputVal) > 0 && parseInt(inputVal) < 10) {
                $(".mainRezult").text(inputVal);
            } else {
                if (parseInt(inputVal) > 0) {
                    let topRez = 1;
                    let end = inputVal.split(".")[1];
                    inputVal = inputVal.split(".")[0];
                    if (end == undefined) {
                        end = '';
                    }
                    topRez = inputVal.length - 1;
                    $(".mainRezult").text(inputVal[0] + '.' + inputVal.substr(1) + end);
                    $(".cross").text('×');
                    $(".st").text('10');
                    $(".topRezult").text(topRez);
                } else {
                    let topRez = 1;
                    let end = inputVal.split(".")[1];
                    inputVal = inputVal.split(".")[0];
                    while (end[0] == '0') {
                        end = end.substr(1);
                        topRez ++;
                    }
                    inputVal = end.substr(1);
                    if (inputVal == '') {
                        $(".mainRezult").text(end[0]);
                    } else {
                        $(".mainRezult").text(end[0] + '.' + inputVal);
                    }            
                    
                    $(".cross").text('×');
                    $(".st").text('10');
                    $(".topRezult").text(topRez * (-1));
                }
            }
        }
        inputVal = '';
    }
}