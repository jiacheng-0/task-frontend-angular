import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { FormsModule } from '@angular/forms'; // ✅ import FormsModule
import { CommonModule } from '@angular/common'; // ✅ import CommonModule

@Component({
  selector: 'app-task-list',
  standalone: true, // make sure it's standalone
  imports: [FormsModule, CommonModule], // ✅ add Module here
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;
    const newTask: Task = { title: this.newTaskTitle, completed: false };
    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.newTaskTitle = '';
    });
  }

  deleteTask(id?: number) {
    if (!id) return;
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== id);
    });
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe();
  }
}
