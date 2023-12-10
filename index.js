const btn=document.querySelector('button');
let cnt=10;

for(let i=1;i<=10;++i){
    btn.addEventListener('click',()=>{
        if(i<=cnt)console.log(i);
        if(i===cnt) {
            cnt=parseInt(prompt('Enter the number from 1 till 10'));
        }
    });
}