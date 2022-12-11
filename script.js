const container = document.querySelector('.container');
const size = document.querySelector('#size');
const sizeSlider = document.querySelector('#sizeSlider');
let pixels = document.querySelectorAll('#pixel');
let sizeNow = 16;

const clear = document.querySelector('#clear');
const colorBtn = document.querySelector('#colorBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraser = document.querySelector('#eraserBtn');
let mode = 'color';

sizeSlider.onmousemove = (e) => {
    let value = e.target.value;
    size.textContent = value + " X " + value;
}
sizeSlider.onchange = (e) => {
    updateCanvas(e.target.value);
    sizeNow = e.target.value;
}

clear.addEventListener('click', () => updateCanvas(sizeNow));
colorBtn.addEventListener('click', () => mode = 'color');
rainbowBtn.addEventListener('click', () => mode = 'rainbow');
eraser.addEventListener('click', () => mode = 'eraser');


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
            switch (mode) {
                case 'color':
                    let color = document.querySelector('#color');
                    pixel.style.backgroundColor = `${color.value}`;
                    break;
                case 'eraser':
                    pixel.style.backgroundColor = '#ffffff';
                    break;
                case 'rainbow':
                    let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
                    let newColor = "#";

                    for (let i = 0; i < 6; i++) {
                        let x = Math.round(Math.random() * 14);
                        let y = hexValues[x];
                        newColor += y;
                    }
                    pixel.style.backgroundColor = newColor;
                    break;
            }
        })
    })
}

updateCanvas(sizeSlider.value);


