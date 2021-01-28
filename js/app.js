// Mascara jQuery
$(document).ready(function(){
    $('#clienteRg').mask('00.000.000-00');
    $('#clienteCpf').mask('000.000.000.00');
    $('#clienteNascimento').mask('00/00/0000');
    $('#clienteMae').mask('Z',{translation: {'Z': {pattern: /[a-zA-Z ]/, recursive: true}}});
});


