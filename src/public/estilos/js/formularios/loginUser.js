


function loginUser() {

    var usuario = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;

    // console.log('el usuario es', usuario, 'y la contrasenia es', contrasenia);

$.ajax({
        data:  {
            usuario,
            contrasenia
        }, //datos que se envian a traves de ajax
        url:   '/logIn', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
                //$("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               // $("#resultado").html(response);
               console.log(response);
        }
});




    //ProgressBar
    // $(function() {
    //     var current_progress = 0;
    //     var interval = setInterval(function() {
    //         current_progress += Math.round(Math.random() * (10 - 1) + 1);

    //         if(current_progress >= 90){
    //             current_progress=100;
    //         }

    //         $("#loginProgress")
    //         .css("width", current_progress + "%")
    //         .attr("aria-valuenow", current_progress)
    //         .text(current_progress + "% Complete");
    //         if (current_progress >= 100)
    //             clearInterval(interval);
    //     }, 200);
    //   });

    }