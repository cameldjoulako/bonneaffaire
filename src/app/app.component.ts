import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bonneaffaire';
  articles;

  prix1: number = 80;
  prix2: number = 230;
  prix3: number = 15;

  message:string = "";

  constructor  (private dataService:DataService) {

  }

  onAffiche(arg:string) {
    return this.message = "Merci d'avoir voté pour l'article: "+ arg;
  }


  ngOnInit(): void {
    this.articles = this.dataService.articles;
  }
}
