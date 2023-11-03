const slide = document.querySelector('.contenido-slide');
let rotateY = 0;

function rotateSlide() {
    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `rotateY(${rotateY}deg)`;
}

function rotateLeft() {
    rotateY -= 45;
    rotateSlide();
}

function rotateRight() {
    rotateY += 45; 
    rotateSlide();
}
S