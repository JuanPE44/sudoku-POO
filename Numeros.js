
class Numeros {
    constructor() {
        this.numeros = document.querySelectorAll('.contenedor-numeros button');
    }

    clickNumero() {
        this.numeros.forEach(numero => {
            numero.addEventListener('click', (e)=> {
                if(t.jugando === true && t.cajitaActual !== undefined) {
                    if(t.cajitaActual.marcado === false && t.cajitaActual.elemento.innerHTML === ' ' || t.cajitaActual.elemento.classList.contains('incorrecto')) {
                        t.compararNumero(e.target.innerHTML)                    
                        t.cajitaActual.elemento.innerHTML = numero.innerHTML;                        
                        t.historial.push(t.cajitaActual);
                        t.pintarActual();
                    }
                }
                
            })
        })
    }
}
