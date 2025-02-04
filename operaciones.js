function operacion(tipo) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    switch(tipo) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert('No se puede dividir por cero');
                return;
            }
            break;
        default:
            break;
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
