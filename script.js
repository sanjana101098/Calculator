$(document).ready(function() {
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    // Handle number and operator button clicks
    $('.btn').click(function() {
        const value = $(this).data('value');
        
        if (value === 'C') {
            // Clear button
            currentInput = '';
            previousInput = '';
            operator = '';
            $('#display').val('');
        } else if (value === '=') {
            // Equal button (calculate result)
            if (previousInput && operator && currentInput !== '') {
                currentInput = calculate(previousInput, operator, currentInput);
                $('#display').val(currentInput);
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Operator button
            if (currentInput !== '') {
                if (previousInput) {
                    currentInput = calculate(previousInput, operator, currentInput);
                    $('#display').val(currentInput);
                }
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else {
            // Number or decimal point
            currentInput += value;
            $('#display').val(currentInput);
        }
    });

    // Calculate the result
    function calculate(a, op, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return b;
        }
    }
});
