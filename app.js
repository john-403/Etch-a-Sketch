const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid grey';
    div.style.width = '15px';
    div.style.height = '15px';


    container.appendChild(div);
}

container.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'black';
    // container.style.border = 'none'
    setTimeout(function () {
        event.target.style.backgroundColor = "";
    }, 500)
})