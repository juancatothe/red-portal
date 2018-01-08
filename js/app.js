$(document).foundation()
$(document).ready(function(){
	$('.rfp').click(function(){
		var rfp_id = $(this).attr('id');
		var rfp_name = rfp[rfp_id].name;
		var rfp_img = rfp[rfp_id].img;
		var rfp_type = rfp[rfp_id].type;
		var rfp_deadline = rfp[rfp_id].deadline;
		var rfp_url = rfp[rfp_id].url;

		$('#info-name').text(rfp_name);
		$('#info-type').text(rfp_type);
		$('#info-deadline').text(rfp_deadline);
		$('#info-img').attr('src', rfp_img);
		$('.info-url').attr('href', rfp_url);

		$('.rfp').removeClass('on');
		$(this).addClass('on');

		$('#default-start').hide();
		$('#info-start').fadeIn();
	});
});
