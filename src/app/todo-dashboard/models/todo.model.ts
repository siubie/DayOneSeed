export class Todo {
  _id: string;
  task: string;
  status: boolean;

  constructor(task, status) {
    this.task = task;
    this.status = status;
  }
}
