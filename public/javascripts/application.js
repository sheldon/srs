function fix_size(){
  if(jQuery("body").height() < jQuery(window).height()){
    jQuery("#footer").css("padding-top",parseInt(jQuery("#footer").css("padding-top")) + jQuery(window).height() - jQuery("body").height() - 50);
  }
}

jQuery(document).ready(function(){
  fix_size();
  jQuery(window).resize(fix_size);
});