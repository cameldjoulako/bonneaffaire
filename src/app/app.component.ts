import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service'
import { filter, interval, Subscription, UnsubscriptionError } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'bonneaffaire';
  articles;

  compteurSubcription: Subscription;

  //secondes: number = 0;
  secondes: string = '';

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

    const compteur = interval(1000).pipe(
      filter(value => value % 2 === 0),
      map(
        value => value % 2 === 0 ?
        `${value} est pair`:
        `${value} est impair`
        )
    );

    this.compteurSubcription = compteur.subscribe(
      {
        next: (v)=> this.secondes = v,
        error: (e) => console.log(e),
        complete: () => console.log("Complete")
      }
    )
  }

  ngOnDestroy(): void {
    this.compteurSubcription.unsubscribe()
  }
}
