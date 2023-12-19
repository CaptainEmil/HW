const input=document.querySelector('input');

input.addEventListener("input",(e)=>{
    const re=/(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[@#$%&_])(?=.*[!?.,])(?=.*^.{8,16}$)/;
    console.log(re.test(e.target.value));
});