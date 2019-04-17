import { Component, OnInit } from '@angular/core';
import { ListMakerService } from './list-maker.service';

export class List {
  id: number;
  title: string = '';
  description: string = '';
  estimate?: number;
  priority?: 1 | 2 | 3 | 4 | 5;
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

@Component({
  selector: 'app-list-maker',
  templateUrl: './list-maker.component.html',
  styleUrls: ['./list-maker.component.scss']
})
export class ListMakerComponent implements OnInit {

  item: List = new List();

  constructor(private listMaker: ListMakerService) { }

  ngOnInit() {
  }

  addList() {
    this.listMaker.addList(this.item);
    this.item = new List();
  }

  removeList(item) {
    this.listMaker.deleteListById(item.id);
  }

  get list() {
    return this.listMaker.getAllLists();
  }

}
