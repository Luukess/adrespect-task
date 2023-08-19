const gallery = new Macy({
    container: '#realizations-galery',
    trueOrder: false,
    waitForImages: false,
    margin: 34,
    columns: 3,
    breakAt: {
        1200: 3,
        940: 3,
        520: 1,
        400: 1
    }
});


function handleGradientGallery() {
    const galleryGradient = document.getElementById('gallery-gradient-box');
    const galleryContainer = document.getElementById('realizations-galery');
    const galleryButton = document.getElementById('gallery-gradient-button');
    console.log(window.innerWidth)
    const galleryHeight = galleryGradient.clientHeight
    if (galleryHeight !== 0) {
        galleryGradient.style.height = '0';
        galleryContainer.style.marginBottom = '25px';
        galleryGradient.style.padding = "0";
        galleryButton.innerHTML = 'Zwiń <i class="bi bi-arrow-up"></i>';

    } else {
        galleryGradient.style.height = '1000px';
        galleryContainer.style.marginBottom = '0';
        galleryGradient.style.padding = "0 0 45px 0"
        galleryButton.innerHTML = 'Rozwiń <i class="bi bi-arrow-down"></i>';
    }
};

document.getElementById('gallery-gradient-button').addEventListener('click', handleGradientGallery)