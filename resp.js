burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightnav');


burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
function search() {
    const input = document.getElementById("search").value.toLowerCase();
    if (input === 'home') {
        window.location.href = '#home';
    }
    else if (input === 'about') {
        window.location.href = '#about';
    }
    else if (input === 'services') {
        window.location.href = '#services';
    }
    else if (input === 'contact us' || input === 'contact') {
        window.location.href = '#contact';
    }
    else {
       alert('No reults found');
    }
}

function adjustSearchResultHeight(){
    const searchResults=document.getElementById('searchResults');
    const links2=document.getElementsByTagName('a');
    const heightPerItem=10;
    searchResults.style.height=(links2.length*heightPerItem)+'px';
}
function filter() {
    const input2 = document.getElementById('search').value.toLowerCase();
    const options = document.querySelectorAll('nav ul li a');
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ' ';
    let hasResults=false;
    options.forEach(function (option) {
        const optionText = option.textContent.toLowerCase();
        if (optionText.startsWith(input2)) {
            const link = document.createElement('a');
            link.textContent = option.textContent;
            link.href = option.href;
            searchResults.appendChild(link);
            hasResults=true;
        }
        
    });
    if(!hasResults && input2.length>0){
        const noResult=document.createElement('div');
        noResult.textContent='No results found';
        searchResults.appendChild(noResult);
    }
    adjustSearchResultHeight();

    if (input2.length > 0) {
        searchResults.style.display = 'block';
    }
    
    else {
        searchResults.style.display = 'none';
    }
    const links=document.querySelectorAll('#searchResults a');
    links.forEach(function(link){
        link.addEventListener('click',function(){
            document.getElementById('searchResults').style.display='none';
            document.getElementById('search').value=this.textContent;
        });
    });

document.getElementById('button').addEventListener('click',function(){
    document.getElementById('searchResults').style.display='none';
});
}
function submit() {
    let nameMessage = document.getElementById('nameError');
    let phoneMessage = document.getElementById('phoneError');
    let emailMessage = document.getElementById('emailError');

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
   

    let isValid = true;
    if (name === '') {
        nameMessage.textContent = 'Fill the above box';
        isValid = false;
    }

    if (phone === '') {
        phoneMessage.textContent = 'Fill the above box';
        isValid = false;
    }
    if (email === '') {
        emailMessage.textContent = 'Fill the above box';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('ThankYou').textContent = 'Thank you for your submission';
        nameMessage.textContent = '';
        phoneMessage.textContent = '';
        emailMessage.textContent = '';
        let inputs=document.querySelectorAll('#contact input, #contact textarea, #contact button');
        inputs.forEach(input=>input.disabled=true);
    }

}


