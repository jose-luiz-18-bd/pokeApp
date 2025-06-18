import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavoriteService } from 'src/app/services/favorite.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  imports: [IonicModule, CommonModule,],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any = null;
  name: string = '';
  typesList = '';
  abilitiesList = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.loadPokemon(name);
      }
    });
  }

  loadPokemon(name: string) {
    this.pokemonService.getPokemonByName(name).subscribe(data => {
      this.pokemon = data;
      this.typesList = data.types.map((t: { type: { name: string } }) => t.type.name).join(', ');
      this.abilitiesList = data.abilities.map((a: { ability: { name: string } }) => a.ability.name).join(', ');
    });
  }

  toggleFavorite(name: string): void {
    this.favoriteService.toggleFavorite(name);
  }

  isFavorite(name: string): boolean {
    return this.favoriteService.isFavorite(name);
  }
}
