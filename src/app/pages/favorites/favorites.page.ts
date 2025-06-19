import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
  ],
})
export class FavoritesPage implements OnInit {
  favorites: string[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  ionViewWillEnter() {
    this.loadFavorites(); // recarrega ao voltar para a aba
  }

  loadFavorites() {
    this.favorites = this.favoriteService.getFavorites();
  }

  goToDetail(name: string) {
    this.router.navigate(['/pokemon-detail', name]);
  }
}
