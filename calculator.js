const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '=') {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        } else if (button.innerText === 'C') {
            result.value = '';
        } else {
            result.value += button.innerText;
        }
    });
});
