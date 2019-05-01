export class ListItem {
    id: number;
    title = '';
    description = '';
    estimate?: number;
    priority?: 1 | 2 | 3 | 4 | 5;
    complete = false;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
  