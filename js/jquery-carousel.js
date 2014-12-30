function createColumns(obj) {
    var first = true;
    var counter = 0;
    var column_size = obj.column_size;
    var elem_width = ($('#carousel-panel').width() * 0.8) / column_size;
    $('#carousel-panel').height($(document).height() * 0.3);
    $('#carousel-prev').css('top', $('#carousel-panel').height() / 2);
    $('#carousel-next').css('top', $('#carousel-panel').height() / 2 * -1);
    $.each(obj.data, function(index, value) {
        var elem = $('<li class="carousel-elem"><a><img></img></a></li>');
        elem.find('a').prop('href', value.url);
        elem.find('img').prop('src', value.img);
        elem.find('img').prop('width', elem_width * 0.95);
        elem.css('top', $('#carousel-panel').height() / 2);
        elem.css('padding', 5 / (column_size + 1) / 2 + '%');
        if(counter % column_size === 0) {
            var carousel_column = $('<ul class="carousel-column"></ul>');
            if(first) {
                carousel_column.show();
                first = false;
            } else {
                carousel_column.hide();
            }
            carousel_column.append(elem);
            $('#carousel-wrapper').append(carousel_column);
        } else {
            $('#carousel-wrapper .carousel-column:last-child').append(elem);
        }
        counter++;
    });
    $('#carousel-prev').css('left', -6);
    $('#carousel-next').css('left', $('.carousel-column:first-child').width() + $('.carousel-column:first-child').offset().left );
} 

jQuery(function($) {
    $('#carousel-prev').on('click', function() {
        console.log('prev');
        $('#carousel-wrapper ul.carousel-column:first-child').toggle();
        $('#carousel-wrapper').append($('#carousel-wrapper ul.carousel-column:first-child'));
        $('#carousel-wrapper ul.carousel-column:first-child').toggle();
    });
    
    $('#carousel-next').on('click', function() {
        console.log('next');
        $('#carousel-wrapper ul.carousel-column:first-child').toggle();
        $('#carousel-wrapper').prepend($('#carousel-wrapper ul.carousel-column:last-child'));
        $('#carousel-wrapper ul.carousel-column:first-child').toggle();
    });
});
