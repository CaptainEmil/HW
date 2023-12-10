const as=document.querySelectorAll('a');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  }
  

as.forEach(a => {
    a.addEventListener('mouseover', (e)=>{
        console.log('works');
        e.target.style.color=randomRGB();
    });
    a.addEventListener('click', (e)=>{
        e.preventDefault();
    });
});