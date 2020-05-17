// Import stylesheets
import './style.css';
import {Individual} from './individual';
import {Canvas} from './draw';

let canvas = new Canvas("myCanvas");
canvas.drawIndividuals(10);

let indiv = new Individual();

console.log("Distance", indiv.calcDist(canvas));
canvas.drawSeq(indiv.seq);

console.log(JSON.stringify(canvas.images));