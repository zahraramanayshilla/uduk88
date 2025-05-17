

// Ambil elemen yang dibutuhkan
const scrollContainer = document.getElementById('scrollContainer');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');

// Fungsi untuk scroll ke kiri
scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -300, // Geser 300px ke kiri
        behavior: 'smooth' // Efek smooth scroll
    });
});

// Fungsi untuk scroll ke kanan
scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 300, // Geser 300px ke kanan
        behavior: 'smooth' // Efek smooth scroll
    });
});

