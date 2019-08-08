import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
 @Input() itemchild: any;
 @Output() toParent1: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
toParent(item){
  this.toParent1.emit(item);
}
}
