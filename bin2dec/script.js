const inputElement = document.querySelector('#input');
const outputElement = document.querySelector('#output');
const btn = document.querySelector('#btn'); // Corrected selector

const binaryToDecimal = () => {
    const binary = inputElement.value;
    const binArray = binary.split('');
    let ans = 0;
    let k = 1;
    for (let i = binArray.length - 1; i >= 0; i--) {
        if (binArray[i] == '1') {
            ans += k;
        }
        k *= 2;
    }
    outputElement.value = ans.toString();
}

btn.addEventListener('click', (event) => {
    event.preventDefault()
    binaryToDecimal()
    console.log('Body clicked');
});