$(document).ready(function() {
    // Abstract toggle
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    // BibTeX toggle
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    // News show/hide toggle
    $('#news-toggle').click(function(e) {
        e.preventDefault();
        $('.news-hidden').toggleClass('news-visible');
        if ($('.news-hidden').first().hasClass('news-visible')) {
            $(this).text('Show less');
            $('.news-hidden.news-visible').css('display', 'flex');
        } else {
            $(this).text('Show all news');
            $('.news-hidden').css('display', 'none');
        }
    });
    // GIF hover: show animated GIF on mouseover of the entire pub-entry row
    $('.gif-hover').each(function() {
        var $img = $(this);
        var staticSrc = $img.attr('src');
        var gifSrc = $img.data('gif');
        var $row = $img.closest('.pub-entry');
        $row.on('mouseenter', function() {
            $img.attr('src', gifSrc);
        });
        $row.on('mouseleave', function() {
            $img.attr('src', staticSrc);
        });
    });
});
