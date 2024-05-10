import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFindIdComponent } from './user-find-id.component';

describe('UserFindIdComponent', () => {
  let component: UserFindIdComponent;
  let fixture: ComponentFixture<UserFindIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFindIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFindIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
