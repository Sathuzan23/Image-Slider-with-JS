window.addEventListener('load', function () {
    const slidecount = document.querySelectorAll('#slider-wrapper ul li').length;
    const slidewidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalwidth = slidecount * slidewidth;
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

    let leftposition = 0;
    let counter = 0;
    slider.style.width = totalwidth + 'px';

    next.addEventListener('click', function (evt) {
        evt.preventDefault();
        counter++;
        if (counter == slidecount) {
            counter = 0;
        }
        leftposition = -counter * slidewidth;
        slider.style.left = leftposition + 'px';
    });

    prev.addEventListener('click', function (evt) {
        evt.preventDefault();
        counter--;
        if (counter < 0) {
            counter = slidecount - 1;
        }
        leftposition = -counter * slidewidth;
        slider.style.left = leftposition + 'px';
    });

});