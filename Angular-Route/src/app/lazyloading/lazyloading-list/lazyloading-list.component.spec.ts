import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingListComponent } from './lazyloading-list.component';

describe('LazyloadingListComponent', () => {
  let component: LazyloadingListComponent;
  let fixture: ComponentFixture<LazyloadingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
