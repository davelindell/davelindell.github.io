/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});


// https://stackoverflow.com/questions/39885659/lazy-load-images-only-after-bootstrap-modal-has-opened
// lazy load modals
//$('div.modal').on("show.bs.modal", function () {
//    $('.lazy_load').each(function(){
//        var img = $(this);
//        img.attr('src', img.data('src'));
//    });
//});   

// lazy load modals
$('div.modal').each(function () {
    var divID = $(this).attr("id");
    $("#" + divID).on("show.bs.modal", function () {
        $('#' + divID).find('.lazy_load').each(function(){
            var img = $(this);
            img.attr('src', img.data('src'));
        });
        //$('#' + divID).find('iframe.lazy_load').each(function(){
        //    var img = $(this);
        //    img.attr('src', img.data('src'));
        //});
        //$('#' + divID).find('source.lazy_load').each(function(){
        //    var src = $(this).attr('data-src');
        //    $(this).attr('src', src);
        //});
        //$('#' + divID).find('video').each(function(){
        //    $(this).get(0).play();
        //});
    });   
});

