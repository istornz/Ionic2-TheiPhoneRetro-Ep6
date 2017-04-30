import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewsApiGlobal } from '../../models/newsapi-global.model';
import { NewsApiService } from '../../services/newsapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  news: NewsApiGlobal = new NewsApiGlobal();
    
  constructor(public navCtrl: NavController, private newsApiService: NewsApiService) {
    // J'ai déplacé la récupération des articles dans une méthode appropriée
    this.getArticles(null);
  }

  // Chargement des articles
  public getArticles(refresher) {
    this.newsApiService.getArticles()
    .then(newsFetched => {
      this.news = newsFetched;

      // Si la variable refresher est null alors on ne fait rien
      (refresher) ? refresher.complete() : null;
      console.log('Données récupérées depuis le serveur !');
    });
  }

}
