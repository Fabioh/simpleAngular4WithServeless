import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IterationsService, IBifurcation } from './iterations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private width: number;
  private height: number;
  private twoDContext: CanvasRenderingContext2D;
  @ViewChild('canvas')
  public canvasElem: ElementRef;
  constructor(public generator: IterationsService) { }
  ngOnInit() {
    const canvas = <HTMLCanvasElement>this.canvasElem.nativeElement;
    this.width = canvas.width;
    this.height = canvas.height;
    this.twoDContext = canvas.getContext('2d');
    this.twoDContext.fillStyle = 'rgba(32, 64, 128, 0.75)';
    this.generator.generate(this.width).subscribe(res => this.plot(res));
  }
  plot(point: IBifurcation) {
    if (this.twoDContext) {
      const x = this.width * (point.r / 4.0);
      const y = Math.floor(this.height - (point.x * this.height));
      this.twoDContext.fillRect(x, y, 2, 2);
    }
  }
}
