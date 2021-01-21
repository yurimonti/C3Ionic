import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrationClientePage } from './registration-cliente.page';

describe('RegistrationClientePage', () => {
  let component: RegistrationClientePage;
  let fixture: ComponentFixture<RegistrationClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
