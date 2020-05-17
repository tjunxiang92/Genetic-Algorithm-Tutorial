export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  images: Array<[number, number]> = [
    [215.2721961017122,112.63256700293017],[346.1582239007919,445.24848902207043],[195.08162594317386,531.6822575015125],[236.4775271896922,439.6004369724018],[187.65781095831676,185.81812675498682],[378.8489702224454,63.42589885538147],[501.42797138613685,212.15757053236467],[538.1382080973073,468.55392393857414],[583.3695950671959,297.4135286287385],[335.2943542536894,334.4140781255284]
  ]
  constructor(canvasId: string) {
    this.canvas = <HTMLCanvasElement> document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  drawLine(start: number, end: number) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.images[start][0], this.images[start][1]);
    this.ctx.lineTo(this.images[end][0], this.images[end][1]);
    this.ctx.stroke();
  }

  drawIndividuals(amt: number) {
    for(let i = 0; i < amt; i++) {
      this.drawPlaceholder(i);
    }
  }

  drawSeq(seq: Array<number>) {
    for (let i = 0; i < 9; i++) {
      this.drawLine(seq[i], seq[i + 1]);
    }
  }

  drawText(text: string) {
    this.ctx.font = "18px Arial";
    this.ctx.fillText(text, 10, 30);
  }

  drawPlaceholder(i: number) {
    var img = new Image;
    let imgWidth = 50;
    let randWidth = i == -1 ? this.getRandom(0.1, 0.9) * this.canvas.width : this.images[i][0];
    let randHeight =  i == -1 ? this.getRandom(0.1, 0.9) * this.canvas.height : this.images[i][1];
    if (i == -1) this.images.push([randWidth, randHeight]);

    let ctx = this.ctx
    img.onload = function(){
      ctx.drawImage(
        img,
        randWidth - imgWidth / 2,
        randHeight - imgWidth / 2,
        imgWidth,
        imgWidth
      );
    };
    img.src = [
      "https://image.flaticon.com/icons/svg/717/717940.svg",
      "https://image.flaticon.com/icons/svg/2590/2590601.svg",
      "https://image.flaticon.com/icons/svg/2590/2590489.svg",
      "https://image.flaticon.com/icons/svg/2771/2771245.svg",
      "https://image.flaticon.com/icons/svg/808/808224.svg"
    ][(Math.random() * 5 | 0)];
  }
}