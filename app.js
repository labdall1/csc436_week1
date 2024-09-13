'use strict'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('lightTheme');
    document.body.classList.toggle('darkTheme');

    const ClassName = document.body.className;
    if (ClassName == 'lightTheme'){
        this.textContent = "Dark";

    } else{
        this.textContent ="Light";
    }
});