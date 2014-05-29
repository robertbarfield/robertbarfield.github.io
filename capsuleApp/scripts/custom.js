/* =================================
===  MAILCHIMP                 ====
=================================== */


$('.mailchimp').submit(function (event) {
	event.preventDefault();
	$.ajax({
        url : 'http://capsulethemoment.us8.list-manage.com/subscribe/post?u=4a49977d6364238e4cc80b2d1&amp;id=b7631a2a88',
        type: 'POST',
        success : mailchimpCallback,
        error : mailchimpCallback
    })

});

function mailchimpCallback(resp) {
	$('#services button').hide();
    $('#services input').hide();
    
    if (resp.result === 'success') {
        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);
        
    } else if(resp.result === 'error') {
        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
    }
    
}
