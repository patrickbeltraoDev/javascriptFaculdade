

$('#cadastrar').click(function(){
    var input = $('#input1').val();
    event.preventDefault();
    $('.lista-a-fazer').append('<li class="lista">' + input + '<input type="checkbox" class="ok" name="concluido"></li>');

    $('.lista-a-fazer').on('click', '.ok', function(){
        $('.lista-feito').append(this.closest('.lista'));
        $(this).closest('li').remove();
    })
    
});


