import "./styles.css";


const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

const gallery = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

let counter = 0;
showGallery(counter);

leftArrow.addEventListener("click", () => {
    counter--;
    showGallery();
})

rightArrow.addEventListener("click", () => {

    counter++;
    showGallery();
})

function showGallery() {
    gallery.forEach((el) => {
        el.classList.remove('visible');

    })

    dots.forEach(el => {
        el.classList.remove('dot-selected')
    })
    if (counter < 0) {
        counter = gallery.length - 1;
    }
    if (counter >= gallery.length) {
        counter = 0;
    }
    gallery[counter].classList.add('visible');
    dots[counter].classList.add('dot-selected')
}


