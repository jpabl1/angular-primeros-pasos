import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  
  public characters: Character[] = [];

  onNewCharacter( character : Character ) : void {
    const newCharacter: Character = { 
      id: uuid(), 
      name: character.name,
      power: character.power
    };
    this.characters.push( newCharacter );
  }

  // onDeleteCharacter( index : number ) : void {
  //   this.characters.splice( index , 1 );
  // }

  onDeleteCharacterById( id : string ) : void {
    this.characters = this.characters.filter( character => character.id != id );
  }

}