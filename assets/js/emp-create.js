$(document).ready(function () {
	var date_input = $('input[name="date"]'); //our date input has the name "date"
	var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
	var options = {
		format: 'dd/mm/yyyy',
		container: container,
		todayHighlight: true,
		autoclose: true,
	};
	date_input.datepicker(options);

	//$("#frmEmployee").valid();
	$('#frmEmployee').validator({
		custom: {
			'mobile': function ($el) { 
				var value = $el.val();
				// 10 digits without space
				// only numeric
				value  = $.trim(value);
				
				// wild characters
				// + => 1 or more preceding character
				// * => 0 or more preceding chars.
				// . => Any character
				// ^ => Starting
				// ! => negation
				// $ => ending
				// {} => can be used for specifying length

				var regExp = /^[7-9][0-9]{9}$/;

				if(regExp.test(value)){
					return 'Please enter valid mobile no';
				}

			}
		}
	});


	$('#radioBtn a').on('click', function () {
		var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#' + tog).prop('value', sel);

		$('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
	});

});