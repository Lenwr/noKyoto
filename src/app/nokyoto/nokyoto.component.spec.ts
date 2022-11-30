import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NokyotoComponent } from './nokyoto.component';

describe('NokyotoComponent', () => {
  let component: NokyotoComponent;
  let fixture: ComponentFixture<NokyotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NokyotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NokyotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
