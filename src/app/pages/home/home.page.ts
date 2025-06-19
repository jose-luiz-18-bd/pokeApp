import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
  ],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  limit = 20;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private favoriteService: FavoriteService,
  ) {}

  ngOnInit() {
    this.loadPokemons();
  }

  isFavorite(name: string): boolean {
    return this.favoriteService.isFavorite(name);
  }

  toggleFavorite(name: string): void {
    this.favoriteService.toggleFavorite(name);
  }


  loadPokemons() {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe(response => {
      const results = response.results;
      results.forEach((poke: any) => {
        const id = this.extractPokemonId(poke.url);
        this.pokemons.push({
          name: poke.name,
          id: id,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });
      });
    });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  extractPokemonId(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 2];
  }

  goToDetail(name: string) {
    this.router.navigate(['/pokemon-detail', name]);
  }
}
