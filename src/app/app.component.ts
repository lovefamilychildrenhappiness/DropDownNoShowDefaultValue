import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'select-bug';
  collection: string[] = ['Option 1', 'Option 2'];

  ngOnInit(){
    console.log('and the collection: ', this.collection);
  }
}
