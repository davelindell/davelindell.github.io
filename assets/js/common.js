$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('#news-table').DataTable( {
        "paging":   true,
        "ordering": false,
        "info":     false,
        "searching": false,
        "bLengthChange": false,
        "pageLength": 5,
        "pagingType": "simple",
        "language": {
        "paginate": {
            "next": '<div class="news-button btn btn-primary btn-sm"><i class="fa fa-caret-right fa-2x"></i></div>',
            "previous": '<div class="news-button btn btn-primary btn-sm"><i class="fa fa-caret-left fa-2x"></i></div>'  
          }
        }
     } );

    // scroll functions
    $(window).scroll(function(e) {

        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll >= 30) {
            $('.navbar').addClass("navbar-hide");
        } else {
            $('.navbar').removeClass("navbar-hide");
        }

    });

});


