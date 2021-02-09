$(document).ready(function() {
	$("#slides").owlCarousel({
		margin:2,
		loop: false,
		center: false,
		pagination: true,
		dots: true,
		responsiveClass:true,
		responsive: {
			0: {
				items:1,
				nav:false
			},
			600: {
				items:3,
				nav:false
			},
			1000: {
				items: 3,
				nav:false
			}
		}
	});
});