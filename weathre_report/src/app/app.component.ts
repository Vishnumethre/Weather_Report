import { Component } from '@angular/core';
import { Weather } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  val:any;
  title = 'weathre_report';
  constructor(private service :Weather ) {}

 
}
