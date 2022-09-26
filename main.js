let reiniciar=document.getElementById('reinicio')

let calculo_imc = function(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
  

    let calcular=(peso/(altura**2)).toFixed(1)
    document.getElementById('mostrarDatos').textContent=calcular

    if (calcular<18.4) {
    document.getElementById('mostrarDatos').style.
    backgroundColor= 'rgb(139, 139, 142)';
    }
    else if (calcular>=18.4 && calcular<=24.9) {
        document.getElementById('mostrarDatos').style.
        backgroundColor= 'rgb(66, 217, 39)';
        }
        else if (calcular>=25 && calcular<=29.9) {
            document.getElementById('mostrarDatos').style.
            backgroundColor= 'rgb(234, 255, 0)';
            }
            else if (calcular>=30 && calcular<=34.9) {
                document.getElementById('mostrarDatos').style.
                backgroundColor= 'rgb(255, 175, 55)';
                }
                else if (calcular>=35 && calcular<=39.9) {
                    document.getElementById('mostrarDatos').style.
                    backgroundColor= 'rgb(253, 99, 38)';
                    }
                    else if (calcular>=40) {
                        document.getElementById('mostrarDatos').style.
                        backgroundColor= 'rgb(253, 38, 38)';
                        }
}

let resetear = function () {
    document.getElementById('peso').value=``
    document.getElementById('altura').value=``
    document.getElementById('mostrarDatos').textContent=``
    document.getElementById('mostrarDatos').style.backgroundColor='white';
}

let boton=document.getElementById('calcular')
boton.addEventListener('click',calculo_imc)
reiniciar.addEventListener('click',resetear)
