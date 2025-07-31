import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBooksComponent } from './address-books.component';

describe('AddressBooksComponent', () => {
  let component: AddressBooksComponent;
  let fixture: ComponentFixture<AddressBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
