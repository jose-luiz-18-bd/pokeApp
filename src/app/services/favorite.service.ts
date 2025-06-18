import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites = new Set<string>();

  isFavorite(name: string): boolean {
    return this.favorites.has(name);
  }

  toggleFavorite(name: string): void {
    if (this.isFavorite(name)) {
      this.favorites.delete(name);
    } else {
      this.favorites.add(name);
    }
  }

  getFavorites(): string[] {
    return Array.from(this.favorites);
  }
}
