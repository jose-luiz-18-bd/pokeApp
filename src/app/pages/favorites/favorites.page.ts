import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  imports: [
    IonicModule,
    CommonModule,
  ],
})
export class FavoritesPage implements OnInit {
  favorites: string[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.favorites = this.favoriteService.getFavorites();
  }
}
