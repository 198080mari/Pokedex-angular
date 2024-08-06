//card.component.ts

import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //pokemon:PokemonData | any

//ou
  pokemon: PokemonData = {
    id:0,
    name:'',
    sprites:{
      front_default:''
    },
    types:[]
  }

  constructor(
    private service:PokemonService
  ) {}

  ngOnInit(): void{
    this.getPokemon('pikachu')
  }
  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {

        this.pokemon = {
          id:res.id,
          name:res.name,
          sprites:res.sprites,
          types: res.types
        }
        /*console.log(res)
        console.log(res.types)
        console.log(this.pokemon)*/
      },
      error: (err) => console.log('not found')
    })
  console.log(searchName)
  }
}
