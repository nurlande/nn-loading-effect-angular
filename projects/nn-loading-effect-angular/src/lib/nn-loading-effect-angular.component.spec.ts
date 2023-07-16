import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NnLoadingEffectAngularComponent } from './nn-loading-effect-angular.component';

describe('NnLoadingEffectAngularComponent', () => {
  let component: NnLoadingEffectAngularComponent;
  let fixture: ComponentFixture<NnLoadingEffectAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NnLoadingEffectAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NnLoadingEffectAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
