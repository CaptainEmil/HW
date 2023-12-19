const input=document.querySelector('input');

const re=/[N\d+]+/g;

input.addEventListener("input",(e)=>{
    e.target.value=e.target.value.replaceAll(re,'N');
});

text='123123DDss1321js3445';
console.log(text.replaceAll(re,'N'));