//const obj for the footer media links
const facebookLink = document.getElementById('facebookLink');
const linkedin = document.getElementById('linkedinLink');
const upworkLink = document.getElementById('upworkLink');
//const for the menu
const menuIcon = document.getElementById('menuIcon');
const menuOptions = document.getElementById('responsiveMenu');
var menuToggle = false;

//making buttons for footer
facebookLink.addEventListener('click', () => {
    window.open('https://www.facebook.com/profile.php?id=100087527200353', '_blank').focus();
});
linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/gen-graphic-b10152256/', '_blank').focus();
});
upworkLink.addEventListener('click', () => {
    window.open('https://www.upwork.com/freelancers/~017e3bb98e715de75a', '_blank').focus();
});

//making button for menu
menuIcon.addEventListener('click', () => { 
    if (!menuToggle)
    {
        menuOptions.style.height = 'auto';
        menuToggle = true;
    }else if(menuToggle) {
        menuOptions.style.height = '0';
        menuToggle = false;
    }
});

//Make portofolio fotos to move

const arrow_up_caffebar = document.getElementById('arrow_up_caffebar');
const arrow_up_hasse = document.getElementById('arrow_up_hasse');
const arrow_up_pasiLumina = document.getElementById('arrow_up_pasiLumina');
const arrow_up_weBrand = document.getElementById('arrow_up_weBrand');

arrow_up_caffebar.addEventListener('click', () => {
    const fostosCont = document.getElementById('imagesCaffeBar');
    var list_fotos = fostosCont.children; //take all childrens from container

    var firstElement = list_fotos[0];
    //removing and adding classes for first element to show at the end
    firstElement.classList.remove('img1');
    firstElement.classList.add('img3');

    list_fotos[0].parentNode.removeChild(list_fotos[0]);

    //change classes of img to show in right order
    list_fotos[0].classList.remove('img2');
    list_fotos[0].classList.add('img1');

    list_fotos[1].classList.remove('img3');
    list_fotos[1].classList.add('img2');

    list_fotos[0].parentNode.appendChild(firstElement);
});

arrow_up_hasse.addEventListener('click', () => {
    const fostosCont = document.getElementById('imagesHasse');
    var list_fotos = fostosCont.children; //take all childrens from container

    var firstElement = list_fotos[0];
    //removing and adding classes for first element to show at the end
    firstElement.classList.remove('img1');
    firstElement.classList.add('img3');

    list_fotos[0].parentNode.removeChild(list_fotos[0]);

    //change classes of img to show in right order
    list_fotos[0].classList.remove('img2');
    list_fotos[0].classList.add('img1');

    list_fotos[1].classList.remove('img3');
    list_fotos[1].classList.add('img2');

    list_fotos[0].parentNode.appendChild(firstElement);
});

arrow_up_pasiLumina.addEventListener('click', () => {
    const fostosCont = document.getElementById('imagesPasiLumina');
    var list_fotos = fostosCont.children; //take all childrens from container

    var firstElement = list_fotos[0];
    //removing and adding classes for first element to show at the end
    firstElement.classList.remove('img1');
    firstElement.classList.add('img3');

    list_fotos[0].parentNode.removeChild(list_fotos[0]);

    //change classes of img to show in right order
    list_fotos[0].classList.remove('img2');
    list_fotos[0].classList.add('img1');

    list_fotos[1].classList.remove('img3');
    list_fotos[1].classList.add('img2');

    list_fotos[0].parentNode.appendChild(firstElement);
});

arrow_up_weBrand.addEventListener('click', () => {
    const fostosCont = document.getElementById('imagesWeBrand');
    var list_fotos = fostosCont.children; //take all childrens from container

    var firstElement = list_fotos[0];
    //removing and adding classes for first element to show at the end
    firstElement.classList.remove('img1');
    firstElement.classList.add('img3');

    list_fotos[0].parentNode.removeChild(list_fotos[0]);

    //change classes of img to show in right order
    list_fotos[0].classList.remove('img2');
    list_fotos[0].classList.add('img1');

    list_fotos[1].classList.remove('img3');
    list_fotos[1].classList.add('img2');

    list_fotos[0].parentNode.appendChild(firstElement);
});