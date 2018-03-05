
    $('#submit').on('click', function(){
        var nameInput = $('#name').val().trim();
        var photoInput = $('#photo').val().trim();
        if (nameInput === '' || photoInput === ''){
            alert('Please fill in name and add a link to a photo');
            return
        }

        else{

            var userData = {
                name: $('#name').val(),
                photo: $('#photo').val(),
                scores: [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val(), ]
            }

            var currentURL = window.location.origin;
            console.log(userData);

            $.post(currentURL + '/api/friends', userData, function(data) {
            $('#matchName').text(data.name);
            $('#matchImg').attr("src", data.photo);
            //$("#resultsModal").modal('toggle');
      });
            

        }

        

    });
    


