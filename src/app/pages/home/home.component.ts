import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  public gameName: boolean = false;
  public leviatan: boolean = false;

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.gameName = true;
      console.log('Game name OK');
      this.canvas();
    }, 10000);
  }

  public canvas = () => {
    setTimeout(() => {
      var canvas = document.getElementById('canv');
      //@ts-ignore
      if (canvas.getContext) {
        //@ts-ignore
        let context = canvas.getContext('2d');
        //@ts-ignore
        context.textAlign = 'center';
        context.fillStyle = 'black';
        context.font = '50px GOD';

        let string = 'Θεός του πολέμου';

        let angle = Math.PI * 0.9; // in radians
        let radius = 250;

        context.translate(300, 300);
        context.rotate((-1 * angle) / 2);

        for (let i = 0; i < string.length; i++) {
          context.rotate(angle / string.length);
          context.save();
          context.translate(0, -1 * radius);
          context.fillText(string[i], 0, 0);
          context.restore();
        }
      }
      this.leviatan = true;
    }, 10000);
  };
}
