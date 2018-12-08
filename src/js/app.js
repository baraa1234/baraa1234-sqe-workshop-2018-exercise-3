import $ from 'jquery';

import {start} from './eval';

function add_row(line) {
    let table =$('#Body');
    table.append('<div>');
    table.append('<span  style="background-color:'+line.color+';" id="submittername1">'+line.line+'</span>');

    table.append('</div>');

}
function refresh(){

    $('#Body').empty();
}
$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        refresh();
        let codeToParse = $('#codePlaceholder').val();
        let params = $('#paramPlaceholder').val();
        let lines = start(codeToParse,params);
        lines.forEach(function(element){
            add_row(element);
        });
    });
});
