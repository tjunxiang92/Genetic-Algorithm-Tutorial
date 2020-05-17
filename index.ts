// Import stylesheets
import './style.css';
import {Individual} from './individual';
import {Canvas} from './draw';

let canvas = new Canvas("myCanvas");

function loop() {
  canvas.clear();
  canvas.drawIndividuals(10);
  let indiv = new Individual();
  canvas.drawSeq(indiv.seq);
  canvas.drawText("Distance: " + indiv.calcDist(canvas));
  
  setTimeout(() => loop(), 1000);
}

loop();


// console.log(JSON.stringify(canvas.images));