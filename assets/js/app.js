const btn = document.querySelector('#burger');
const ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    ul.classList.toggle('active');
})

// aos

AOS.init({
    duration: 1300
})