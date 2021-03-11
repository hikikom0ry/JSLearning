'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart '),
    wrapper = document.querySelector('.wrapper');

const div = document.createElement('div');
div.classList.add('black'); 
circles[0].style.backgroundColor = "red";
wrapper.append(div);

// div.innerHTML = "<h1>Hello World</h1>";
div.textContent = "Hola";

