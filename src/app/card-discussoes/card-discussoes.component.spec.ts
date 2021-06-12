import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiscussoesComponent } from './card-discussoes.component';

describe('CardDiscussoesComponent', () => {
  let component: CardDiscussoesComponent;
  let fixture: ComponentFixture<CardDiscussoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiscussoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiscussoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
