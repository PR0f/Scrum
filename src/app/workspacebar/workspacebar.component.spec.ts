import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacebarComponent } from './workspacebar.component';

describe('WorkspacebarComponent', () => {
  let component: WorkspacebarComponent;
  let fixture: ComponentFixture<WorkspacebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspacebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
