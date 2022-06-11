const container = document.querySelector('#container');
button = document.querySelector('button');

container.addEventListener('mouseover', function (event) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = '#' + randomColor;
    // container.style.border = 'none'
    setTimeout(function () {
        event.target.style.backgroundColor = "";
    }, 500)
})



button.addEventListener('click', function (event) {
    var nbofsquaresperside = parseInt(prompt('Enter number of squares per side'));
    container.innerHTML = '';
    for (let i = 0; i < nbofsquaresperside ** 2; i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid grey';
        // div.style.width = '15px';
        // div.style.height = '15px';

        container.appendChild(div);

        div.style.width = (272 / nbofsquaresperside) - 2 + 'px';
        div.style.height = (272 / nbofsquaresperside) - 2 + 'px';

    }


})

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid grey';
    div.style.width = '15px';
    div.style.height = '15px';


    container.appendChild(div);
}
container.style.width = 16 * 17 + 'px';
