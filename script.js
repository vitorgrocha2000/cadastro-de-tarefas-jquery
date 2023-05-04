$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const atividade = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p>${atividade}</p>`).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(800);

        $('#nova-tarefa').val('');
    })

    $('ul').on('click', 'li p', function () {
        $(this).toggleClass('cliquei');
    });
});
