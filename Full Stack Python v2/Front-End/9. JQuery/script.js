// script.js
$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        const taskName = $('#task-input').val();
        if (taskName) {
            $('#task-list').append(`<li>${taskName}</li>`);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});