import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  names = ['Daniel', 'Cristian', 'Nicolás'];
  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.names.push('Nuevo item');
  }

  deleteItem(index: number) {
    this.names.splice(index, 1);
  }

}
