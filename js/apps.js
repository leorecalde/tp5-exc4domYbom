function fecha() {
    const dias = new Date();
    let dia = dias.getDay();
    let num = dias.getDate();
    let mes = dias.getMonth();
    let anio = dias.getFullYear();

    const diasSemana = [`Domingo`,`Lunes`,`Martes`,`Miercoles`,`Jueves`,`Viernes`,`Sabado`]
    const meses = [`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`, `Junio`, `Julio`, `Agosto`, `Septiembre`, `Octubre`, `Noviembre`, `Diciembre`]
    return `${diasSemana[dia]} ${num}, de ${meses[mes]}, del ${anio}`;
    
}
function reloj() {
    const tiempo = new Date();
    let horas = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
  
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
  
  
    const mostrarReloj = `${horas}:${minutos}:${segundos}`;
    const mostrarFecha = fecha();
    document.getElementById('reloj').innerHTML = `${mostrarFecha} <br> ${mostrarReloj}`;
  }
  
  setInterval(reloj, 1000);
  
  reloj();
  