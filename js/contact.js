

$("#contact-form").submit(function(evt){
    // preventing ajax call cause old
    return
    evt.preventDefault();
    $.ajax({
        url: "/.netlify/functions/sparkpost-send-email",
        type: "POST",
        data: $('#contact-form').serialize(),
        dataType: "text",
        success: function(response) {
            $(".form-submit-btn").hide()        
            $(".form-alert-box-success").css("display", "flex")
            console.log("success response: ",response)
        },
        error: function (error){
            $(".form-submit-btn").hide()    
            $(".form-alert-box-error").css("display", "flex")
            console.log("error response: ",error)
        }
    });

    //Facebook Pixel
    fbq('track', 'CompleteRegistration');
})