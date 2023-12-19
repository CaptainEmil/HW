const input=document.querySelector('input');

input.addEventListener("input",(e)=>{
    const re=/\d/;
    e.target.value=e.target.value.replace(re, 'D');
});