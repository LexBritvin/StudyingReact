class Task {
  constructor(title = Task.getDefaultTitle()) {
    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log(`Создание задачи ${this.title}`);
  }

  get done() {
    return this._done ? 'Выполнена' : 'Не выполнена';
  }

  set done(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._done = value;
    }
    else {
      console.log('blah blah blah');
    }
  }

  complete() {
    this.done = true;
    console.log(`Задача ${this.title} выполнена`);
  }

  static getDefaultTitle() {
    return `Задача ${Task.count}`;
  }
}

Task.count = 0;

let task = new Task();
task.complete();