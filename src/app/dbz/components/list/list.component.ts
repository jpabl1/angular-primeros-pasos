import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public index : number = 0;

  // @Output()
  // public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteCharacterById : EventEmitter <string> = new EventEmitter();

  @Input()
  public characterList : Character[] = [{
    id: '',
    name: 'Trunks',
    power: 100
  }];

  // deleteCharacter( i : number ) : void {
  //   console.log(i);
  //   this.onDeleteCharacter.emit(i);
  // }

  deleteCharacterById ( id : string ) : void {
    console.log(id);
    this.onDeleteCharacterById.emit(id);
  }

}
