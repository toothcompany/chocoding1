document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // 테마 설정 및 localStorage에서 불러오기
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggleBtn.textContent = '☀️';
        }
    }

    // 테마 전환 버튼 이벤트 리스너
    themeToggleBtn.addEventListener('click', () => {
        let newTheme;
        if (body.getAttribute('data-theme') === 'dark') {
            newTheme = 'light';
            themeToggleBtn.textContent = '🌙';
        } else {
            newTheme = 'dark';
            themeToggleBtn.textContent = '☀️';
        }
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    generateBtn.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('lotto-number'); // 'number' -> 'lotto-number'로 수정
            numberElement.textContent = number;
            numberElement.style.backgroundColor = getNumberColor(number);
            lottoNumbersContainer.appendChild(numberElement);
        });
    });

    function getNumberColor(number) {
        if (number <= 10) return '#fbc400'; // Yellow
        if (number <= 20) return '#69c8f2'; // Blue
        if (number <= 30) return '#ff7272'; // Red
        if (number <= 40) return '#aaa'; // Gray
        return '#b0d840'; // Green
    }
});
