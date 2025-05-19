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


function switchTab(tabId) {
    // Sembunyikan semua section
    document.getElementById("minuman").classList.add("hidden");
    document.getElementById("makanan").classList.add("hidden");
    document.getElementById("paket").classList.add("hidden");

    // Tampilkan yang dipilih
    document.getElementById(tabId).classList.remove("hidden");

    // Reset semua tab styling
    document.querySelectorAll(".tab-item").forEach(el => {
        el.classList.remove("text-green-500", "border-green-500");
        el.classList.add("text-gray-500", "border-transparent");
    });

    // Tambahkan styling ke tab aktif
    event.target.classList.add("text-green-500", "border-b-2", "border-green-500");
}
