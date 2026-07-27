bulb = document.getElementById('circle');
on = document.getElementById('on');
off = document.getElementById('off');

on.addEventListener('click',()=>{
    bulb.classList.add('yellow');
    bulb.classList.remove('white');
});

off.addEventListener('click',()=>{
    bulb.classList.remove('yellow');
    bulb.classList.add('white');
});