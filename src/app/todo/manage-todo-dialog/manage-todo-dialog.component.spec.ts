import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTodoDialogComponent } from './manage-todo-dialog.component';

describe('ManageTodoDialogComponent', () => {
  let component: ManageTodoDialogComponent;
  let fixture: ComponentFixture<ManageTodoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTodoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
