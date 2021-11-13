import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkespacesComponent } from './workespaces.component';

describe('WorkespacesComponent', () => {
  let component: WorkespacesComponent;
  let fixture: ComponentFixture<WorkespacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkespacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkespacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
