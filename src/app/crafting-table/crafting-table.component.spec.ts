import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingTableComponent } from './crafting-table.component';

describe('CraftingTableComponent', () => {
  let component: CraftingTableComponent;
  let fixture: ComponentFixture<CraftingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
