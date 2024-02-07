document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;
            if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (value === 'AC') {
                display.value = '';
            } else if (value === 'DEL') {
                display.value = display.value.toString().slice(0, -1);
            } else if (value === '%') {
                // Handle percentage calculation here
                // For example, you could calculate 10% of the current value
                display.value = parseFloat(display.value) / 100;
            } else {
                display.value += value;
            }
        });
    });
});