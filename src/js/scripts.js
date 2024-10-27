$('.custom-btn__background').on('click', function() {
    $('.custom-container').toggleClass('color');
    $('.custom-btn__background').toggleClass('color');
    $('.custom-sun-box').toggleClass('move');
    $('.custom-moon-box').toggleClass('move');
    
    $('.custom-btn__face').toggleClass('move');
    $('.custom-btn__eye-left, .custom-btn__eye-right').toggleClass(function(){
      return $(this).is('.open, .close') ? 'open close' : 'close';
    });
    $('.custom-btn__mouth').toggleClass('close');
    
    $('.custom-btn__animation').toggleClass(function(){
      return $(this).is('.move-reverse, .move') ? 'move-reverse move' : 'move';
    });
  });
  


  function diferenciaFechas(fecha1, fecha2 = new Date()) {
    const fechaInicial = new Date(fecha1);
    const fechaFinal = new Date(fecha2);

    let años = fechaFinal.getFullYear() - fechaInicial.getFullYear();
    let meses = fechaFinal.getMonth() - fechaInicial.getMonth();
    let días = fechaFinal.getDate() - fechaInicial.getDate();

    // Ajuste de meses y años si los días son negativos
    if (días < 0) {
        meses--;
        días += new Date(fechaFinal.getFullYear(), fechaFinal.getMonth(), 0).getDate(); // Total de días del mes anterior
    }

    // Ajuste de años si los meses son negativos
    if (meses < 0) {
        años--;
        meses += 12;
    }

    // Crear el string de respuesta
    let resultado = "";
    if (años > 0) resultado += `${años} año${años > 1 ? 's' : ''} `;
    if (meses > 0) resultado += `${meses} mes${meses > 1 ? 'es' : ''}`;

    return resultado.trim(); // Elimina espacios extra al final si solo hay un componente
}


// JavaScript para copiar el correo al portapapeles y mostrar el mensaje de confirmación
document.querySelector(".btn-outline-primary.rounded-circle-prim").addEventListener("click", function() {
  const email = "matiasdiazarriaza@gmail.com";  // Reemplaza con tu dirección de correo

  // Copiar el correo al portapapeles
  navigator.clipboard.writeText(email).then(function() {
      // Mostrar mensaje de confirmación
      const confirmationMessage = document.getElementById("confirmation-message");
      confirmationMessage.style.display = "block";
      
      // Ocultar el mensaje después de 2 segundos
      setTimeout(function() {
          confirmationMessage.style.display = "none";
      }, 2000);
  }).catch(function(error) {
      console.error("Error al copiar el correo: ", error);
  });
});


