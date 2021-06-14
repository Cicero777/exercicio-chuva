import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoTrabalhosComponent } from './secao-trabalhos.component';

describe('SecaoTrabalhosComponent', () => {
  let component: SecaoTrabalhosComponent;
  let fixture: ComponentFixture<SecaoTrabalhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoTrabalhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoTrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
