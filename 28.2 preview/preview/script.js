const overlay = document.querySelector('.overlay'),
    btns = document.querySelectorAll('button');
// btn.onclick = function(){
//     console.log("clicked");
// };
// btn.onclick = function(){
//     console.log("second click");
// };
let i = 0;
const deleteElement = (e) =>{
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i > 0){
    //     btn.removeEventListener("click", deleteElement);
    // }
};
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach(item => {
    item.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');
link.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log(event.target); 
});

