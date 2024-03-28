const bar = document.querySelector('#bar');
const cross = document.querySelector('#cross');
const nav = document.querySelector('.nav');

bar.addEventListener('click',() =>{
    bar.style.display= 'none';
    cross.style.display= 'block';
    nav.style.left ='20%';
});


cross.addEventListener('click',()=>{
 cross.style.display ='none';
 bar.style.display= 'block';
 nav.style.left='100%';
});

const arrow = document.querySelectorAll('.arrow');
 
//Array ,for each function
arrow.forEach((e) => {

   e.addEventListener('click',() => {
    var footerlist=e.parentElement.nextElementSibling;
    
    //if else statement jqvascript

    if (e.classList.contains('temp'))
    {
       e.classList.remove('temp');
       footerlist.style.display='none';
       e.style.transform='rotate(0deg)';
    } 
    else 
    {
        e.classList.add('temp');
        footerlist.style.display='block';
        e.style.transform='rotate(180deg)';
    }

   });
})

