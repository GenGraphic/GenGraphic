//const obj for the footer media links
const facebookLink = document.getElementById('facebookLink');
const linkedin = document.getElementById('linkedinLink');
const upworkLink = document.getElementById('upworkLink');
//const for the menu
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const menuOptions = document.getElementById('menu');
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
        menuOptions.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        menuToggle = true;
    }
});
closeIcon.addEventListener('click', () => {
    if (menuToggle)
    {
        menuOptions.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        menuToggle = false;
    }
})

//button for contact us
document.getElementById('contactBtn').addEventListener('click', () => {
    location.href = 'views/contact.html';
});
