import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapabolComponent } from './mapabol.component';

describe('MapabolComponent', () => {
  let component: MapabolComponent;
  let fixture: ComponentFixture<MapabolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapabolComponent]
    });
    fixture = TestBed.createComponent(MapabolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
