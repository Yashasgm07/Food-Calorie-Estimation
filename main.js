$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        $("#cal").html(" ");
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();
        $("#cal").html(" ");

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result

                // alert(data);
                if(data=="Adhirasam")
                {
                    $("#cal").html("144 kcal  100 gm");
                }
                else if(data=="Aloogobi")
                {
                    $("#cal").html("86 kcal	 100gm");
                }
                else if(data=="Aloomatar")
                {
                    $("#cal").html("98 kcal   100 gm");
                }
                else if(data=="Aloomethi")
                {
                    $("#cal").html("118 kcal   100 gm");
                }
                else if(data=="Aloo shimla mirch")
                {
                    $("#cal").html("266 kcal   100 gm");
                }
                else if(data=="Aloo tikka")
                {
                    $("#cal").html("89 kcal   100 gm");
                }
                else if(data=="Anarasa")
                {
                    $("#cal").html("242 kcal   100 gm");
                }
                else if(data=="Ariselu")
                {
                    $("#cal").html("242 kcal   100 gm");
                }
                else if(data=="Bander laddu")
                {
                    $("#cal").html("400 kcal   100 gm");
                }
                else if(data=="Basundhi")
                {
                    $("#cal").html("192 kcal   100 gm");
                }
                



                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data);
                console.log('Success!');
            },
        });
    });

});
