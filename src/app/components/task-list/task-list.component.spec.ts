import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskService, Task } from '../../services/task.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let mockTaskService: jasmine.SpyObj<TaskService>;

  beforeEach(async () => {
    // Create a spy object for TaskService
    mockTaskService = jasmine.createSpyObj('TaskService', [
      'getTasks',
      'addTask',
      'deleteTask',
      'updateTask',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        TaskListComponent, // standalone component
        FormsModule,
      ],
      providers: [
        provideHttpClientTesting(), // 👈 provides HttpClientTestingModule
        { provide: TaskService, useValue: mockTaskService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks on init', () => {
    const mockTasks: Task[] = [{ id: 1, title: 'Test Task', completed: false }];
    mockTaskService.getTasks.and.returnValue(of(mockTasks));

    component.ngOnInit();

    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].title).toBe('Test Task');
  });

  it('should add a new task', () => {
    const newTask: Task = { id: 2, title: 'New Task', completed: false };
    mockTaskService.addTask.and.returnValue(of(newTask));

    component.newTaskTitle = 'New Task';
    component.addTask();

    expect(component.tasks).toContain(newTask);
    expect(component.newTaskTitle).toBe('');
  });

  it('should delete a task', () => {
    component.tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: false },
    ];

    mockTaskService.deleteTask.and.returnValue(of(void 0));

    component.deleteTask(1);

    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].id).toBe(2);
  });

  it('should toggle task completed', () => {
    const task: Task = { id: 1, title: 'Task', completed: false };

    console.log('Before toggle:', task.completed); // log before toggle

    // Mock updateTask to toggle completed dynamically
    mockTaskService.updateTask.and.callFake((t: Task) => {
      console.log(
        'Inside mockTaskService.updateTask, before toggling:',
        t.completed
      );
      t.completed = !t.completed;
      console.log(
        'Inside mockTaskService.updateTask, after toggling:',
        t.completed
      );

      return of(t);
    });

    component.toggleCompleted(task);

    console.log('After toggle:', task.completed); // log after toggle

    expect(task.completed).toBe(true);
  });
});
