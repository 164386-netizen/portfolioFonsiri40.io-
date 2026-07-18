// =============================
// ปุ่มกลับด้านบน
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =============================
// Lightbox Gallery
// =============================

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;


// เปิดรูป

galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        updateImage();

        lightbox.style.display = "flex";

    });

});


// เปลี่ยนรูป

function updateImage() {

    lightboxImg.src = galleryImages[currentIndex].src;

}


// ปิด

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// คลิกพื้นหลังปิด

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// รูปก่อนหน้า

prevBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    updateImage();

});


// รูปถัดไป

nextBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    updateImage();

});


// Keyboard

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

        if (e.key === "ArrowRight") {

            currentIndex++;

            if (currentIndex >= galleryImages.length) {

                currentIndex = 0;

            }

            updateImage();

        }

        if (e.key === "ArrowLeft") {

            currentIndex--;

            if (currentIndex < 0) {

                currentIndex = galleryImages.length - 1;

            }

            updateImage();

        }

    }

});
