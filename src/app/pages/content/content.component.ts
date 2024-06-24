import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-24/common/f124-standard-ed-16x9.jpg.adapt.crop191x100.1200w.jpg';
  contentTitle:string = 'MY NEWS';
  contentDescription:string = 'Hello, world!';

  constructor() { }

  ngOnInit(): void {
  }

}
