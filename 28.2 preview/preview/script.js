 const btn = document.querySelector('#btn');
//  btn.onclick = function(){
//      alert('Just click');
//  }
let i = 0;
const deleteElement = (event) =>{
    console.log(event.target);
    i++;
    if (i > 0){
        btn.removeEventListener('click', deleteElement);
    }
};
btn.addEventListener('click', deleteElement);


