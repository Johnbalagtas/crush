let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let position;

btn.addEventListener('mouseover', () => {

    position = position ? 0 : 200;
    btn.style.transform = `translate(${position}px,0px)`
    btn.style.transition = "all 0.3s ease";

});


btn2.addEventListener('click', () => {

    
    document.querySelector('body').style.backgroundColor = '#cc7c76';
    document.querySelector('.msg-box p').textContent = 'So were officially dating!';
    document.querySelector('.msg-box p').style.paddingLeft = '100px';
    alert('Tayo na!!?.');
    document.getElementById('btn').textContent = 'Oo';
    document.getElementById('btn2').textContent = 'Oo';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('btn2').style.display = 'none';

})

