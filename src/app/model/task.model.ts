export class Task {

  taskId: number;
  taskName: string;
  parentTaskName: string;
  priority: number;
  startDate: Date;
  endDate: Date;

  constructor(values: object = { }) {

  }
}
