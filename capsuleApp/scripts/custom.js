/* =================================
===  MAILCHIMP                 ====
=================================== */

$(document).ready( function () {
    // I only have one form on the page but you can be more specific if need be.
    var $form = $('form');
    if ( $form.length > 0 ) {
        $('form button[type="submit"]').bind('click', function ( event ) {
            event.preventDefault();
            register($form);
        });
    }
});

function register($form) {
	
	$('form input').hide();
	$('form button').hide();
	$('#capsuleTagline').hide();
	
	console.log($form);
	
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { $('.subscription-error').fadeIn(1000); },
        success     : function(data) {
            if (data.result != "success") {
                $('.subscription-error').fadeIn(1000);
            } else {
                $('.subscription-success').fadeIn(1000);
        		$('.subscription-error').fadeOut(500);
            }
        }
    });
}
