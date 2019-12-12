import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/task';
@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  @Output() taskViewed: EventEmitter<string> = new EventEmitter();
  @Output() taskUpdate: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  onClickDelete() {
    this.taskDeleted.emit(this.task.id);
  }
  onClickView() {
    this.taskViewed.emit(this.task.web_url);
  }
  onClickUpdate() {
    this.taskUpdate.emit(this.task.id);
  }
}
