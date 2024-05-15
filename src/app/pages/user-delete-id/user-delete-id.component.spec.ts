import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteIdComponent } from './user-delete-id.component';

describe('UserDeleteIdComponent', () => {
  let component: UserDeleteIdComponent;
  let fixture: ComponentFixture<UserDeleteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDeleteIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDeleteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
