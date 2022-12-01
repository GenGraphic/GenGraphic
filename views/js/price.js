var packageToCustomize = document.getElementById('package_to_customize');
//const for the menu
const menuIcon = document.getElementById('menuIcon');
const menuOptions = document.getElementById('menu');
var menuToggle = false;
//const obj for the footer media links
const facebookLink = document.getElementById('facebookLink');
const linkedin = document.getElementById('linkedinLink');
const upworkLink = document.getElementById('upworkLink');

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

//menu show and hide
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

//replace the div of package to customize with the one is clicked
document.addEventListener('click', function(e) {
    if (e.target.id == "customizeBronzeBtn") {
        packageToCustomize.innerHTML = document.getElementById('bronze_package').innerHTML;
        RemoveAllFeature();
    }
    if (e.target.id == "customizeBusinessBtn") {
        packageToCustomize.innerHTML = document.getElementById('business_package').innerHTML;
        RemoveAllFeature();
    }
    if (e.target.id == "customizePremiumBtn") {
        packageToCustomize.innerHTML = document.getElementById('premium_package').innerHTML;
        RemoveAllFeature();
    }
}, false);

function Add_Take(obj) {

    if( !(obj.classList.contains('active')) ) {
        var parrentAbsolute = obj.parentElement.parentElement.parentElement.parentElement;
        parrentAbsolute.classList.add('activeFeature');
        obj.classList.add('active');
        obj.removeAttribute('unchecked');
        obj.setAttribute('checked', '');

        //prepare the preis ans in int to be calulated
        var preisFeature = parrentAbsolute.children[1].children[0].children[0].children[0].innerHTML;
        const preis = preisFeature.slice(0,-1).replace('.', '');//removes last element € and the point

        //function to calculate
        function CalculatorAdd() {
            var packagePreisElement = document.getElementById('package_to_customize').children[3].children[0].innerHTML;
            var packagePreis = packagePreisElement.replace(/\D/g, '');

            var preisToShow = Number(packagePreis) + Number(preis) + '€';
            document.getElementById('package_to_customize').children[3].children[0].innerHTML ='New: ' + preisToShow;

        }
        CalculatorAdd();
    }else if(obj.classList.contains('active')) {
        var parrentAbsolute = obj.parentElement.parentElement.parentElement.parentElement;
        parrentAbsolute.classList.remove('activeFeature');
        obj.classList.remove('active');
        obj.removeAttribute('checked');
        obj.setAttribute('unchecked', '');
    
        //prepare the preis ans in int to be calulated
        var preisFeature = parrentAbsolute.children[1].children[0].children[0].children[0].innerHTML;
        const preis = preisFeature.slice(0,-1).replace('.', '');//removes last element € and the point
    
        //function to calculate
        function CalculatorAdd() {
            var packagePreisElement = document.getElementById('package_to_customize').children[3].children[0].innerHTML;
            var packagePreis = packagePreisElement.replace(/\D/g, '');
    
            var preisToShow = Number(packagePreis) - Number(preis) + '€';
            document.getElementById('package_to_customize').children[3].children[0].innerHTML ='New: ' + preisToShow;
        }
        CalculatorAdd();    
        };
}

function RemoveAllFeature() {
    var toggleList = document.querySelectorAll('input.toggle');
    var featuresList = document.querySelectorAll('.activeFeature');
    
    for(var a = 0; a < featuresList.length; a++) {
        featuresList[a].classList.remove('activeFeature');
    }

    for(var b = 0; b < toggleList.length; b++) {
        toggleList[b].classList.remove('active');
        toggleList[b].removeAttribute('checked');
        toggleList[b].setAttribute('unchecked', '');
        $('.toggle').prop('checked',false).change(); 
    }
}

