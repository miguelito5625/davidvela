
var counterPass1;
var counterPass2;

var valuePass1;
var valuePass2;


function countPass1(obj) {
  counterPass1 = obj.value.length;
  valuePass1 = obj.value;
}

function countPass2(obj) {
  counterPass2 = obj.value.length;
  valuePass2 = obj.value;

  if(Number(counterPass2) < Number(counterPass1) || counterPass2 == 0){

    document.getElementById("iconPass2").textContent = 'lock_outline';
    $('#password2').tooltip('hide');

  }
  
  if (Number(counterPass2) >= Number(counterPass1)) {

    if (valuePass1 != valuePass2) {

      document.getElementById("iconPass2").textContent = 'clear';
      // console.log('erronea');
      $('#password2').attr('data-placement', 'right').attr('title', 'las contraseñas no coinciden').tooltip('show');

    }

    if (valuePass1 == valuePass2) {

      document.getElementById("iconPass2").textContent = 'done';
      $('#password2').tooltip('hide');
      // console.log('ok');

    }

    

  }

}

function singupUser() {

    var user = document.getElementById("user").value;
    var password = document.getElementById("password2").value;

$.ajax({
        data:  {
            user,
            password
        }, //datos que se envian a traves de ajax
        url:   '/signup', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
                //$("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve

            console.log(response);
            
        }
});


    }