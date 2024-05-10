import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldalAllUsersComponent } from './modal-all-users.component';

describe('AllUsersComponent', () => {
  let component: MoldalAllUsersComponent;
  let fixture: ComponentFixture<MoldalAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoldalAllUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoldalAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
