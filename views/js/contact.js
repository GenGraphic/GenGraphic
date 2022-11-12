//const obj for the footer media links
const facebookLink = document.getElementById('facebookLink');
const linkedin = document.getElementById('linkedinLink');
const upworkLink = document.getElementById('upworkLink');
//const for the menu
const menuIcon = document.getElementById('menuIcon');
const menuOptions = document.getElementById('menuOptions');
var menuToggle = false;

//making buttons for footer
facebookLink.addEventListener('click', () => {
    location.href = 'https://www.facebook.com/profile.php?id=100087527200353';
});
linkedin.addEventListener('click', () => {
    location.href = 'https://www.linkedin.com/in/gen-graphic-b10152256/';
});
upworkLink.addEventListener('click', () => {
    location.href = 'https://www.upwork.com/freelancers/~017e3bb98e715de75a';
});

//making button for menu
menuIcon.addEventListener('click', () => { 
    if (!menuToggle)
    {
        menuOptions.style.display = 'block';
        menuIcon.src = '../images/exit.png';
        menuToggle = true;
    }else if(menuToggle) {
        menuOptions.style.display = 'none';
        menuIcon.src = '../images/menuIcon.png';
        menuToggle = false;
    }
});