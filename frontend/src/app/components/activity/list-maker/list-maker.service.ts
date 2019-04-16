import { Injectable } from '@angular/core';
import { List } from './list-maker.component';

@Injectable({
  providedIn: 'root'
})
export class ListMakerService {

  id:number = 0;
  list: List[] = [];

  constructor() { }

    // Simulate POST /Lists
    addList(list: List): ListMakerService {
      if (!list.id) {
        list.id = ++this.id;
      }
      this.list.push(list);
      return this;
    }

    // Simulate DELETE /Lists/:id
    deleteListById(id: number): ListMakerService {
      this.list = this.list
        .filter(List => List.id !== id);
      return this;
    }

    getAllLists(): List[] {
      return this.list;
    }

    getListById(id: number): List {
      return this.list
        .filter(List => List.id === id)
        .pop();
    }

}
