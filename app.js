//задача 1
function extractNumbers(str) {
    const matches = str.match(/\d+/g);
    if (!matches) {
        return [];
    }
    return matches.map(Number);
}
console.log(extractNumbers("a1fg5hj6"));

//задача 2
function fibonacciWithDelay(n1 = 0, n2 = 1, max = 144) {
    let current = n1;
    if (current > max) {
        return;
    }
console.log(current);
    setTimeout(() => {
        fibonacciWithDelay(n2, n1 + n2, max);
    }, 1000);
}
fibonacciWithDelay();

//задача 3
async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        data.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Ошибка при запросе данных:', error);
    }
}
fetchProductTitles();

//задача 4
const buttonContainer = document.getElementById('color-buttons');
buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent.trim();
        document.body.style.backgroundColor = color;
    }
});

// задача 5
const block = document.getElementById('toggle-block');
const button = document.getElementById('toggle-button');
function toggleBlock() {
    if (block.style.display === 'none') {
        block.style.display = 'block';
        button.textContent = 'Hide Block';
    } else {
        block.style.display = 'none';
        button.textContent = 'Show Block';
    }
}
button.addEventListener('click', toggleBlock);

// задача 6
const counterElement = document.getElementById('counter');
let count = 0;
function updateCounter() {
    if (count <= 100) {
        counterElement.textContent = count;
        count++;
    } else {
        clearInterval(intervalId);
    }
}
const intervalId = setInterval(updateCounter, 1);

// задача 7
async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Received data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
document.getElementById('fetch-button').addEventListener('click', fetchData);

