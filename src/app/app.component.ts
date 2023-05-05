import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bonneaffaire';

  prix1: number = 80;
  prix2: number = 230;
  prix3: number = 15;

  message:string = "";

  constructor  () {
  }

  onAffiche(arg:string) {
    return this.message = "Merci d'avoir voté pour l'article: "+ arg;
  }

  articles = [
    {
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      /* urlImg: "https://via.placeholder.com/300x200", */
      urlImg: "../assets/velo.png",
      textAltImg: "Un vélo",
      dispo: false
    },
    {
      titreArticle: "TV",
      prixArticle: 230,
      description: "Très bonne qualité d'acran",
      urlImg: "../assets/tv.png",
      textAltImg: "Un Téveviseur",
      dispo: true
    },
    {
      titreArticle: "Jouet",
      prixArticle: 80,
      description: "Super jouet enfant",
      urlImg: "../assets/jouet.png",
      textAltImg: "Un jouet",
      dispo: true
    },
  ]

  ngOnInit(): void {
  }
}
 