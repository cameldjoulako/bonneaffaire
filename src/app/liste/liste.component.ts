import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit{

  message:string = "";
  articles;
  constructor  (private dataService:DataService) {

  }

  onAffiche(arg:string) {
    return this.message = "Merci d'avoir voté pour l'article: "+ arg;
  }


  ngOnInit(): void {
    /* this.articles = this.dataService.articles; */
    this.articles = this.dataService.articles;
  }

  getList() {
    this.dataService.getArticleFromServer.subscribe(liste => {this.articles = articles})
  }


}
