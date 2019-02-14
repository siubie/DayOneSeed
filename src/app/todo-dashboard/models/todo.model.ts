export class Todo {
  id: string;
  task: string;
  status: boolean;

  constructor(id, task, status) {
    this.id = id;
    this.task = task;
    this.status = status;
  }
}
