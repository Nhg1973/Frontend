import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombreEnLunaComponent } from './hombre-en-luna.component';

describe('HombreEnLunaComponent', () => {
  let component: HombreEnLunaComponent;
  let fixture: ComponentFixture<HombreEnLunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HombreEnLunaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HombreEnLunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
