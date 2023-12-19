const input=document.querySelector('input');

input.addEventListener("input",(e)=>{
    const re=/^[0-2][0-4]:[0-5][0-9]$/;
    console.log(re.test(e.target.value));
});