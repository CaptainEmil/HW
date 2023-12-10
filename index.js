const as=document.querySelectorAll('a');
const lis=document.querySelectorAll('li');
const img=document.querySelector('#photo-main');

lis.forEach(li=>{
    li.addEventListener('mouseover',()=>{
        li.style.outline= '2px solid black';
    });
    li.addEventListener('mouseout',()=>{
        li.style.outline= 'none';
    });
    li.addEventListener('click',()=>{
        img.src=li.querySelector('img').src;
    });
});

