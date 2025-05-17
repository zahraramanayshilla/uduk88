// navbar
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparant', 'nav-color');
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparant')
    }
});

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

function incrementValue(button) {
    const input = button.parentNode.querySelector('input[type="number"]');
    input.value = parseInt(input.value) + 1;
}

function decrementValue(button) {
    const input = button.parentNode.querySelector('input[type="number"]');
    // Pastikan nilai tidak kurang dari nilai minimum
    if (parseInt(input.value) > parseInt(input.min)) {
        input.value = parseInt(input.value) - 1;
    }
}

const toggleSidebar = document.getElementById('toggleSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

// Logika untuk membuka sidebar
function openModal() {
    document.getElementById('sidebar').classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal/sidebar
function closeModal() {
    document.getElementById('sidebar').classList.add('translate-x-full');
    document.body.style.overflow = 'auto';
}

