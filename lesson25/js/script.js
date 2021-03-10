'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart '),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 200px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'black';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('ПРивет, мир!');

div.classList.add('black');
// wrapper.insertBefore(div, hearts[0]);
// wrapper.appendChild(div);
// document.body.append(div);
wrapper.append(div);
//wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);
div.innerHTML = "<h1>Hello World</h1>";
//div.textContent = "hello";
//div.insertAdjacentHTML('beforebegin', '<h2>Hola</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hola</h2>')
// div.insertAdjacentHTML('beforeend', '<h2>Hola</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hola</h2>');