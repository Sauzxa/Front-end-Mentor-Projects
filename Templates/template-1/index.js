let ul =document.querySelector("ul");
let links = document.querySelector('.links')
links.addEventListener('click', ()=>{
    if (ul.style.display === 'none') {
        ul.style.display = 'block';
      } else {
        ul.style.display = 'none';
      }
})

