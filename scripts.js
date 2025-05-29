document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});


// SIDEBAR: Fungsi buka/tutup modal
window.openModal = function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    }
};

// INCREMENT: Tambah jumlah item
window.incrementValue = function (button) {
    const input = button.previousElementSibling;
    if (input) {
        input.value = parseInt(input.value) + 1;
    }
};

// DECREMENT: Kurangi jumlah item
window.decrementValue = function (button) {
    const input = button.nextElementSibling;
    if (input && parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
};

// TABS: Ganti tab menu
window.switchTab = function (tabId, event) {
    const sections = ['minuman', 'makanan', 'paket'];

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.classList.add('hidden');
        }
    });

    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    document.querySelectorAll('.tab-item').forEach(el => {
        el.classList.remove('text-green-500', 'border-green-500', 'border-b-2');
        el.classList.add('text-gray-500', 'border-transparent');
    });

    if (event?.target) {
        event.target.classList.add("text-green-500", "border-b-2", "border-green-500");
    }
};
// tab-control.js

document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    const sections = ['minuman', 'makanan', 'paket'];

    tabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            // Hapus aktif dari semua tab
            tabItems.forEach(item => {
                item.classList.remove('text-green-500', 'border-b-2', 'border-green-500');
                item.classList.add('text-gray-500');
            });

            // Aktifkan tab yang diklik
            tab.classList.remove('text-gray-500');
            tab.classList.add('text-green-500', 'border-b-2', 'border-green-500');

            // Sembunyikan semua section
            sections.forEach(id => {
                const section = document.getElementById(id);
                if (section) section.classList.add('hidden');
            });

            // Tampilkan section sesuai tab
            const targetId = tab.getAttribute('onclick').match(/'([^']+)'/)[1];
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.remove('hidden');
        });
    });
});


// login
 document.addEventListener('DOMContentLoaded', () => {
            const btnSignIn = document.getElementById('btn-signin');
            const btnSignUp = document.getElementById('btn-signup');
            const formSignIn = document.getElementById('form-signin');
            const formSignUp = document.getElementById('form-signup');

            // Simple form switching without animation
            btnSignIn.addEventListener('click', () => {
                btnSignIn.classList.add('tab-active');
                btnSignIn.classList.remove('tab-inactive');
                btnSignUp.classList.add('tab-inactive');
                btnSignUp.classList.remove('tab-active');
                
                formSignIn.classList.remove('form-hidden');
                formSignUp.classList.add('form-hidden');
            });

            btnSignUp.addEventListener('click', () => {
                btnSignUp.classList.add('tab-active');
                btnSignUp.classList.remove('tab-inactive');
                btnSignIn.classList.add('tab-inactive');
                btnSignIn.classList.remove('tab-active');
                
                formSignUp.classList.remove('form-hidden');
                formSignIn.classList.add('form-hidden');
            });
        });