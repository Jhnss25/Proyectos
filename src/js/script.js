/* Variables */
const formulario = document.querySelector('.formulario');
const inputMontoCuenta = document.querySelector('#ingresar-pago');
const inputPorcentajePropina = document.querySelector('#porcentaje-propina');
const inputPersonas = document.querySelector('#personas');
const btnCalcular = document.querySelector('#calcular');
const btnReset = document.querySelector('#reset');
const valorInputs = {
    montoCuenta: '',
    porcentajePropina: '',
    personas: '',
}

/* Eventos */
// btnReset.addEventListener('click', resetarInformacion);
btnCalcular.addEventListener('click', calcularPropina);
inputMontoCuenta.addEventListener('blur', rellenarInputs);
inputPorcentajePropina.addEventListener('blur', rellenarInputs);
inputPersonas.addEventListener('blur', rellenarInputs);

/* Funciones */
function calcularPropina(e) {

    e.preventDefault();
    

    // console.log(typeof inputMontoCuenta.value);

    
}

// function resetarInformacion(e) {
    //     // e.preventDefault();
    
    //     console.log(formulario.nombre);
    //     console.log('Estoy reseteando el texto...');
// }

/* Rellena el objeto de los inputs */
function rellenarInputs(e) {
    if (e.target.id === 'ingresar-pago') {
        valorInputs.montoCuenta = e.target.value;
    } else if (e.target.id === 'porcentaje-propina') {
        valorInputs.porcentajePropina = e.target.value;
    } else if (e.target.id === 'personas') {
        valorInputs.personas = e.target.value;
    }
}

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