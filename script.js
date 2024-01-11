document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkModeButton');
    const headerElements = document.querySelectorAll('h1, p');

    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        // Check if dark mode is active and update button text
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

        // Toggle dark-mode class on header elements
        headerElements.forEach(element => {
            element.classList.toggle('dark-mode', isDarkMode);
        });

        // Change the section title text
        const sectionTitle = document.getElementById('2D-art-section').querySelector('h2');
        sectionTitle.textContent = '2D Art';
    });
});
