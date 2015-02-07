$(document).ready(function(){ 
    // Hide all but first tab content
    $('.accordion__content:not(:first)').hide();

    // Activate first tab
    $('.accordion__title:first-child').addClass('active');

    // The clicking / tapping action
    $('.accordion__title').on('click', function() {
    $('.accordion__content').hide();
    $(this).next().show().prev().addClass('active').siblings().removeClass('active');
    });
});