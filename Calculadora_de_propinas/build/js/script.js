/* Variables */
const formulario = document.querySelector('.formulario');
// inputs
const inputMontoCuenta = document.querySelector('#ingresar-pago');
const inputPorcentajePropina = document.querySelector('#porcentaje-propina');
const inputPersonas = document.querySelector('#personas');
// botones
const btnCalcular = document.querySelector('#calcular');
const btnReset = document.querySelector('#reset');
// valores de los inputs
const valorInputs = {
    montoCuenta: '',
    porcentajePropina: '',
    personas: '',
}

/* Eventos */
// btnReset.addEventListener('click', resetarInformacion);
btnCalcular.addEventListener('click', calcularPropina);

/* Funciones */
function calcularPropina(e) {
    e.preventDefault();
    console.log('hola...');
    
    if (inputMontoCuenta.id === 'ingresar-pago') {
        valorInputs.montoCuenta = e.target.value;
    } else if (inputPorcentajePropina.id === 'porcentaje-propina') {
        valorInputs.porcentajePropina = e.target.value;
    } else if (inputPersonas.id === 'personas') {
        valorInputs.personas = e.target.value;
    }
    // console.log(typeof inputMontoCuenta.value);

    console.log(valorInputs);
    
}

// function resetarInformacion(e) {
    //     // e.preventDefault();
    
    //     console.log(formulario.nombre);
    //     console.log('Estoy reseteando el texto...');
// }

// Crea el parrafo para ingresar el mensaje
function crearParrafo(mensaje, clase) {
    const divPorcentajePropina = document.querySelector('.formulario-propina');
    
    if (inputPorcentajePropina === '') {
        const parrafo = document.createElement('p');
        parrafo.classList.add(clase);
        parrafo.textContent = mensaje;
        
        divPorcentajePropina.appendChild(parrafo);
    }
}