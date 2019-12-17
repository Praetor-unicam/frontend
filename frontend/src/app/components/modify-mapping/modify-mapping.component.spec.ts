import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMappingComponent } from './modify-mapping.component';

describe('ModifyMappingComponent', () => {
  let component: ModifyMappingComponent;
  let fixture: ComponentFixture<ModifyMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
