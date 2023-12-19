const input=document.querySelector('input');

input.addEventListener("input",(e)=>{
    const re=/^(\(\+994\))[\ \-]((50)|(55)|(41))[\ \-][0-9]{3}([\ \-][0-9]{2}){2}$/;
    console.log(re.test(e.target.value));
});