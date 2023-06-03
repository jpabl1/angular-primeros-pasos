import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent {

  public title : string = "Componenente Contador";
  public counter : number = 0;
  public plus : number = 5;

  increaseBy( value : number ) : void {
    
    this.counter += value;
    // this.counter += this.plus;

  }

  decreaseBy( value : number ) : void {

    this.counter -= value;
    // this.counter -= this.plus;

  }

  reset() :void {
    this.counter = 0;
  }

}
