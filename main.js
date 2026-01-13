document.addEventListener('DOMContentLoaded', () => {
    const recommendBtn = document.getElementById('recommend-btn');
    const dinnerRecommendationContainer = document.getElementById('dinner-recommendation');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    const dinnerMenus = ['Chicken', 'Pizza', 'Pork Belly', 'Sushi', 'Pasta', 'Tteokbokki', 'Kimchi Stew', 'Soybean Paste Stew', 'Jokbal', 'Bossam'];

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

    recommendBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const selectedMenu = dinnerMenus[randomIndex];
        dinnerRecommendationContainer.textContent = selectedMenu;
    });
});
