import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites = new Set<string>();
  private storageKey = 'favoritePokemons'

  getFavorites(): string[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  isFavorite(name: string): boolean {
    return this.getFavorites().includes(name);
  }

  toggleFavorite(name: string): void {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(name);

    if (index >= 0) {
      favorites.splice(index, 1);
    } else {
      favorites.push(name);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

}
