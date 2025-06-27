import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardyOchronyComponent } from './standardy-ochrony.component';

describe('StandardyOchronyComponent', () => {
  let component: StandardyOchronyComponent;
  let fixture: ComponentFixture<StandardyOchronyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardyOchronyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardyOchronyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
