import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAutoBuildComponent } from './component-auto-build.component';

describe('ComponentAutoBuildComponent', () => {
  let component: ComponentAutoBuildComponent;
  let fixture: ComponentFixture<ComponentAutoBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAutoBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAutoBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
