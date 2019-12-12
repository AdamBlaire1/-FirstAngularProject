import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/shared/task';
@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {

  private tacksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];
  constructor(private http: HttpClient) { }

  getTasks() {
    this.http.get<Task[]>(this.tacksRoute).subscribe(tasks => {
      this.tasks = tasks;
      console.log('Tasks', this.tasks);
    });
  }
  ngOnInit() {
    this.getTasks();
  }
  onTaskDeleted(taskId: number) {
    let taskIndex = 0;
    for (const task of this.tasks) {
      if (task.id === taskId) {
        this.tasks.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }
  onTaskViewed(url: string) {
    window.open(url);
  }
}
