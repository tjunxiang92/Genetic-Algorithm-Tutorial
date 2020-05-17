// Import stylesheets
import './style.css';
import {Individual} from './individual';
import {Canvas} from './draw';
// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let indiv = new Individual("Hola");
console.log(indiv.greet());

let canvas = new Canvas("myCanvas");
canvas.drawPlaceholder();
canvas.drawPlaceholder();
canvas.drawPlaceholder();
canvas.drawPlaceholder();
canvas.drawLine(0, 1);
canvas.drawLine(1, 2);

console.log(canvas);