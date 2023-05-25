import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  articles = [
    {
      id: 1,
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "https://via.placeholder.com/300x200",
     /*  urlImg: "../assets/images/velo.png", */
      textAltImg: "Un vélo",
      dispo: false
    },
    {
      id: 2,
      titreArticle: "TV",
      prixArticle: 230,
      description: "Très bonne qualité d'acran",
      urlImg: "https://via.placeholder.com/300x200",
      textAltImg: "Un Téveviseur",
      dispo: true
    },
    {
      id: 3,
      titreArticle: "Jouet",
      prixArticle: 80,
      description: "Super jouet enfant",
      urlImg: "https://via.placeholder.com/300x200",
      textAltImg: "Un jouet",
      dispo: true
    },
  ]

  constructor() { }

  getArticle(id: number){
    const articles = this.articles.find((a) => {
      return a.id == id;
    });
    return articles;

  }
}
