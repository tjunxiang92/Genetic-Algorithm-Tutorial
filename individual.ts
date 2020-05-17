import {Canvas} from './draw';

export class Individual {
  seq: Array<number>;
  constructor() {
    this.seq = this.generateSeq();
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  generateSeq() {
    let seq = Array.from({length:10},(v,k)=>k);
    this.shuffle(seq);
    return seq
  }

  calcDist(canvas: Canvas) {
    let totDist = 0.0;
    for (let i = 0; i < 9; i++) {
      let start = canvas.images[this.seq[i]];
      let end = canvas.images[this.seq[i + 1]];
      
      totDist += Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2))
    }

    return (totDist | 0) / 100;
  }

  rotateMutate(indiv: Individual) {
    
  }
}