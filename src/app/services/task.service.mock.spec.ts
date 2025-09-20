import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { of } from 'rxjs';

describe('TaskService (mocked)', () => {
  let service: jasmine.SpyObj<TaskService>;

  beforeEach(() => {
    // Create a mock with the same methods
    service = jasmine.createSpyObj('TaskService', ['getTasks', 'addTask', 'deleteTask', 'updateTask']);

    // Provide default return values
    service.getTasks.and.returnValue(of([]));
    service.addTask.and.returnValue(of({ id: 1, title: 'Mock Task', completed: false }));
    service.deleteTask.and.returnValue(of(void 0));
    service.updateTask.and.returnValue(of({ id: 1, title: 'Mock Task', completed: true }));

    TestBed.configureTestingModule({
      providers: [
        { provide: TaskService, useValue: service } // provide the mock
      ]
    });
  });

  it('should create the mocked service', () => {
    expect(service).toBeTruthy();
  });

  it('getTasks should return an observable', (done) => {
    service.getTasks().subscribe(tasks => {
      expect(tasks).toEqual([]);
      done();
    });
  });

  it('addTask should return a new task', (done) => {
    service.addTask({ title: 'Test', completed: false }).subscribe(task => {
      expect(task.title).toBe('Mock Task');
      done();
    });
  });
});
