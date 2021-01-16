  
function wbk_on_form_rendered( service ){
   
    // define form 1
    var form_1 = '<label class="wbk-input-label" for="wbk-name">Your First Name (required)</label><span class="wpcf7-form-control-wrap wbk-name"><input type="text" name="wbk-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-name" aria-required="true" aria-invalid="false"></span>'
               + '<label class="wbk-input-label" for="wbk-email">Your Email (required)</label><span class="wpcf7-form-control-wrap wbk-email"><input type="text" name="wbk-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-email" aria-required="true" aria-invalid="false"></span>'
               + '<label class="wbk-input-label" for="wbk-phone">Your phone (required)</label><span class="wpcf7-form-control-wrap wbk-phone"><input type="tel" name="wbk-phone" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel wbk-text" id="wbk-phone" aria-required="true" aria-invalid="false"></span>'
               + '<label class="wbk-input-label" for="custom-field1">Custom field 1</label><span class="wpcf7-form-control-wrap custom-field1"><input type="text" name="custom-field1" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="custom-field1" aria-required="true" aria-invalid="false"></span>';

  	
    // define form 2
    var form_2 = '<label class="wbk-input-label" for="wbk-name">Your First Name (required)</label><span class="wpcf7-form-control-wrap wbk-name"><input type="text" name="wbk-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-name" aria-required="true" aria-invalid="false"></span>'
               + '<label class="wbk-input-label" for="wbk-email">Your Email (required)</label><span class="wpcf7-form-control-wrap wbk-email"><input type="text" name="wbk-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-email" aria-required="true" aria-invalid="false"></span>'
               + '<label class="wbk-input-label" for="wbk-phone">Your phone (required)</label><span class="wpcf7-form-control-wrap wbk-phone"><input type="tel" name="wbk-phone" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel wbk-text" id="wbk-phone" aria-required="true" aria-invalid="false"></span>'
               + '<label class="wbk-input-label" for="custom-field1">Custom field 1</label><span class="wpcf7-form-control-wrap custom-field1"><input type="text" name="custom-field1" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="custom-field1" aria-required="true" aria-invalid="false"></span>'
               + '<label class="wbk-input-label" for="custom-field2">Custom field 2</label><span class="wpcf7-form-control-wrap custom-field2"><input type="text" name="custom-field2" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="custom-field2" aria-required="true" aria-invalid="false"></span>';
   
 	  // get array of checked services
  	var services = [];
    jQuery( '.wbk-service-checkbox:checked').each( function(){
        services.push( jQuery( this ).val() );
    }); 
  	
    var form = '';
    // check if service 11 checked
    if( services.includes('11') ){
        // use form 1
        form = form_1;
    }
  
    // check if service 12 checked
    if( services.includes('12') ){
        // use form 2
        form = form_2;
    }
  	
    jQuery('#wbk-booking-form-container').find('.wpcf7').html(form);
  
}
