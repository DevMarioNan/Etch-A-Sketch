const container = document.querySelector('.container');
const size = document.querySelector('#size');
const sizeSlider = document.querySelector('#sizeSlider');
let pixels = document.querySelectorAll('#pixel');



sizeSlider.onmousemove = (e) => {
    let value = e.target.value;
    size.textContent = value + " X " + value;
}
sizeSlider.onchange = (e) => updateCanvas(e.target.value);


const updateCanvas = (value) => {
    let child = container.lastChild;
    while (child) {
        container.removeChild(child);
        child = container.lastChild;
    }

    for (let i = 0; i < value * value; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'pixel');
        div.style.cssText = `width:${500 / value}px; height:${500 / value}px;`;
        div.style.backgroundColor = 'white';
        container.append(div);
    }
    pixels = document.querySelectorAll('#pixel');

        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {
                    let color = document.querySelector('#color');
                    pixel.style.backgroundColor = `${color.value}`;
            })
        })
}

updateCanvas(sizeSlider.value);


