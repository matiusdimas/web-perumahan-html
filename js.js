// nav start
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#list-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('navini')
    navMenu.classList.toggle('navnull')

});
// nav end

const rightGambar = document.getElementById('right-gambar');
const leftGambar = document.getElementById('left-gambar');
const gambar = document.getElementById('content-gambar');

gambar.onscroll = function () {

    console.log(`iniSleft ${gambar.scrollLeft}`)
    console.log(`iniSwidth ${gambar.scrollWidth}`)
    console.log(`iniSclient ${gambar.clientWidth}`)
    if (gambar.scrollLeft == 0) {
        leftGambar.classList.add('hidden')
    } else {
        leftGambar.classList.remove('hidden')
    }
    if (Math.ceil(gambar.scrollLeft) === (gambar.scrollWidth - gambar.clientWidth) || (Math.floor(gambar.scrollLeft) === (gambar.scrollWidth - gambar.clientWidth))) {
        rightGambar.classList.add('hidden')
    } else {
        rightGambar.classList.remove('hidden')
    }
}
leftGambar.addEventListener('click', function (){
    gambar.scrollLeft -= 200;
})
rightGambar.addEventListener('click', function (){
    gambar.scrollLeft += 200
});

