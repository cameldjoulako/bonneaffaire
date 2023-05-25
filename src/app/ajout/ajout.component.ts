import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { interval, filter } from 'rxjs';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})

export class AjoutComponent implements OnInit {
  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');

  constructor(){}

  ngOnInit(): void {
    const counter = interval(1000);

  }

  onSubmit(form:NgForm) {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;

    console.log("NewTitle : " + newTitle);
    console.log("NewPrice : " + newPrice);
  }
}
