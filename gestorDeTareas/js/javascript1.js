function escribirCalendario(calendario){
    var date = new Date();
   var calend = '<table id="calendario"><tr><th>L</th><th>M</th><th>X</th>' +
       '<th>J</th><th>V</th><th>S</th><th>D</th></tr><tr>';
    for(var i = 1; i < 30; i++){
        if(i%7==0){
            calend += '<td><a id="festivo" href="#">'+i+'</a></td>';
        }else{
            calend += '<td><a id="no_festivo" href="#">'+i+'</a></td>';
        }
        if(i%7==0){
            calend += '</tr>';
        }
    }
    calend += '</table>';
    calendario.innerHTML += calend;
}

window.addEventListener('load', function () {
    var calendario = document.getElementById('div_calendario');
    escribirCalendario(calendario);
    var intputElements = document.getElementsByTagName("input");
    for (var i = 0; i < intputElements.length; i++) {
        intputElements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.name == "nombre") {
                    e.target.setCustomValidity('Debes darle nombre a la tarea');
                }
                else if(e.target.name == "fecha"){
                    e.target.setCustomValidity('Debes establecer una fecha de entrega"');
                }
                else if(e.target.name == "area"){
                    e.target.setCustomValidity('Debes escribir una descripción"');
                }
            }
        };
    }
});