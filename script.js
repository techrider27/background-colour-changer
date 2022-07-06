let colors = ['yellowgreen','turquoise','teal','blue', 'yellow', 'violet', 'orange', 'green', 'red','dodgerblue','fushica','gray'];

let button = document.getElementById('button');
button.addEventListener('click', function () {
    var randomColor = colors[Math.floor(Math.random()* colors.length)] 
    let container = document.querySelector('body');
    container.style.background = randomColor;
})
