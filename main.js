$(document).ready(function() {
    $("#sect").on("click", "li", function(e){   
    $(".content").removeClass('show')
    $(this).find('+ .content').addClass('show')
 })  
})
