import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
