var jsonResponse;
var prescriptions;

$( document ).ready(function() {
    loadBasicInfoUser();
    loadRecetas();
});

function loadBasicInfoUser(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://172.20.10.8:5000/api/v1/patients/search_patients",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "processData": false,
        "data": "{\n\t\"action\": \"GET_PATIENT\",\n\t\"ss_num\": \"1\"\n}"
    }
      
    $.ajax(settings).done(function (response) {
        console.log(response);

        jsonResponse = response;

        var ssn = response.ss_num;
        var nombre = response.name;
        var poliza = response.ass_policy;
        
        $("#nombreHeader").append("<h3 class='text-center display-4'>"+nombre+"</h3>");
        $("#ssnHeader").append("<h4>"+ssn+"</h4>");
        $("#polizaHeader").append("<h4'>"+poliza+"</h4>");
    });
}

function loadRecetas(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://172.20.10.8:5000/api/v1/patients/search_patients",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "processData": false,
        "data": "{\n\t\"action\": \"GET_PRESCRIPTION\",\n\t\"ss_num\": \"1\"\n}"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);

        var html = "";

        html += '<div class="card">';

        
        
        
         
       
        for (var i = 0; i < response.length; i++) {
            html += '<div class="card-header" id="headingOne">';
            html += '<h5 class="mb-0">';
            html += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">';

            var date = response[i].date;
            var diagnose = response[i].diagnose;
            var doctor = response[i].doctor;
            var drug = response[i].drug;
            var duration = response[i].duration;
            var interval = response[i].interval;
            var professional_card = response[i].professional_card;
            var sickness = response[i].sickness;
            var symptoms = response[i].symptoms;

            html += ' '+date;
            html += '</button>';
            html += '</h5>';
            html += '</div>';

            html += '<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">';
            html += '<div class="card-body">';
            html += diagnose+' '+drug+' '+duration+' '+interval+' '+sickness+' '+symptoms+' ';
       
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }

        $("#accordionExample").append(html);
      });
}