export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  images: Array<[number, number]> = []
  constructor(canvasId: string) {
    this.canvas = <HTMLCanvasElement> document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
  }

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  drawLine(start: number, end: number) {
    // let myCanvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    // let ctx = myCanvas.getContext('2d');
    this.ctx.beginPath();
    this.ctx.moveTo(this.images[start][0], this.images[start][1]);
    this.ctx.lineTo(this.images[end][0], this.images[end][1]);
    this.ctx.stroke();
  }

  drawPlaceholder() {
    // let myCanvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    // let ctx = myCanvas.getContext('2d');
    var img = new Image;
    let imgWidth = 50;
    let randWidth = this.getRandom(0.1, 0.9) * this.canvas.width;
    let randHeight = this.getRandom(0.1, 0.9) * this.canvas.height;
    this.images.push([randWidth, randHeight]);
    let ctx = this.ctx
    img.onload = function(){
      ctx.drawImage(
        img,
        randWidth - imgWidth / 2,
        randHeight - imgWidth / 2
      );
    };
    img.src = "https://via.placeholder.com/50";
  }
}