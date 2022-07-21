import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioHelloComponent } from './rio-hello.component';

describe('RioHelloComponent', () => {
  let component: RioHelloComponent;
  let fixture: ComponentFixture<RioHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioHelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
