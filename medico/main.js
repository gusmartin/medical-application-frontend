
function login(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://172.20.10.8:5000/api/v1/doctors/search_doctors",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "processData": false,
      "data": "{\n\t\"action\": \"LOGIN\",\n\t\"user\": \"esteban@doctor.com\",\n\t\"password\": \"password\"\n}\n"
    };
    console.log(settings);
    $.ajax(settings).done(function (response) {
      console.log(response)
    });

 }

 login();
