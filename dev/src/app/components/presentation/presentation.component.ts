import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  public age: Number = new Date(Date.now()).getYear() - 90;
  public timedev: Number = new Date(Date.now()).getYear() - 116;

  constructor() { }

  ngOnInit() {
  }

}
