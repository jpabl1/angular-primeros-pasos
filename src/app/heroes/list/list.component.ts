import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public heroNames : string [] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public heroNamesDeleted : string [] = [];
  
  public heroDeleted ?: string;

  removeLastHeroName ():void {
    this.heroDeleted = this.heroNames.pop();

    if(this.heroDeleted) {
      this.heroNamesDeleted.push(this.heroDeleted);
    }

  }

}
