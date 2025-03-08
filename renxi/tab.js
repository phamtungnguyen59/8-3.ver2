const text = "Chúc mừng ngày 8/3";
let index = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = text.substring(0, index);
    document.title = currentText; // Thay đổi tiêu đề

    let speed = isDeleting ? 350 : 290; // Tăng tốc độ gõ và xóa

    if (isDeleting) {
        index--;
    } else {
        index++;
    }

    if (index === text.length) {
        isDeleting = true;
        speed = 500; // Dừng 0.5 giây trước khi xóa
    } else if (index === 0) {
        isDeleting = false;
        speed = 500; // Dừng 0.5 giây trước khi viết lại
    }

    setTimeout(typeEffect, speed);
}

window.onload = typeEffect;
