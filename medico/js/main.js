function modify(input)
{
  var id =input;
  var stat=prompt("Ingrese el estatus del Paciente", "activo/inactivo");

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://172.20.10.8:5000/api/v1/patients/search_patients",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "processData": false,
    "data": "{\n\t\"action\": \"UPDATE_STATUS\",\n\t\"status\": \""+stat+"\",\n\t\"ss_num\": \""+id+"\"\n}"
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function modify2(input)
{
  var id =input;
  var stat=activo;

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://172.20.10.8:5000/api/v1/patients/search_patients",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "processData": false,
    "data": "{\n\t\"action\": \"UPDATE_STATUS\",\n\t\"status\": \""+stat+"\",\n\t\"ss_num\": \""+id+"\"\n}"
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
