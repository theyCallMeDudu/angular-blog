import { Component, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = fakeData;
  }

}
