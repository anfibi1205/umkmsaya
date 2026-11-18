// Menu navigasi
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Tutup menu setelah memilih halaman
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

// Fungsi pesan produk melalui WhatsApp
function orderProduct(nama, harga) {
    const nomor = "6283114102242";

    const pesan = `Halo Risol Lovely! Saya ingin memesan ${nama} seharga Rp${harga.toLocaleString("id-ID")}. Mohon informasi pemesanannya.`;

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}

// Galeri foto diperbesar
const galleryImages = document.querySelectorAll(".gallery-img");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        modalImage.src = img.src;
        imageModal.classList.add("active");
    });
});

closeModal.addEventListener("click", () => {
    imageModal.classList.remove("active");
});

imageModal.addEventListener("click", event => {
    if (event.target === imageModal) {
        imageModal.classList.remove("active");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        imageModal.classList.remove("active");
    }
});

// Animasi muncul ketika bagian website terlihat
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".product-card, .gallery-grid img, .about-image, .about-text, .contact-card"
).forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";
    observer.observe(element);
});

// Aktifkan animasi
const animationStyle = document.createElement("style");

animationStyle.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(animationStyle);