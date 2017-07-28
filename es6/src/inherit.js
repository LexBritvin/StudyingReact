class Task {
  constructor(title) {
    this.title = title;
    this.done = false;
    console.log('Task creation');
  }

  complete() {
    this.done = true;
    console.log('Task complete');
  }
}

class SubTask extends Task {
  constructor(title, parent) {
    super(title);
    this.parent = parent;
    console.log('SubTask creation');
  }

  complete() {
    super.complete();
    console.log('SubTask complete');
  }
}

let task = new Task('Learn JS');
let subtask = new SubTask('Learn ES6', task);



task.complete();
subtask.complete();

console.log(task);
console.log(subtask);
