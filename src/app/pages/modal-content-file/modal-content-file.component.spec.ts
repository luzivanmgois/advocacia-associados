import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldalContentFileComponent } from './modal-content-file.component';

describe('MoldalAllUsersComponent', () => {
  let component: MoldalContentFileComponent;
  let fixture: ComponentFixture<MoldalContentFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoldalContentFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoldalContentFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
