const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

setTimeout(()=>{
    h1.style.color= 'blue';
    h1.style.textAlign = 'center';
});

const text ="Coding Block Lucknow";
let l = 1;
setInterval(()=>{

    h2.innerText = text.substring(0,l);
    l = (l+1)%(text.length + 1);
},200);

button .addEventListener('click',(event)=>{
    console.log(input.value);
})

