import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { of } from 'rxjs';

describe('AppComponent', () => {

  let mockTaskService: jasmine.SpyObj<TaskService>;
  
  beforeEach(async () => {
    mockTaskService = jasmine.createSpyObj('TaskService', ['getTasks']);
    mockTaskService.getTasks.and.returnValue(of([]));
    
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: TaskService, useValue: mockTaskService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'task-frontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('task-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Task Manager');
  });
});
