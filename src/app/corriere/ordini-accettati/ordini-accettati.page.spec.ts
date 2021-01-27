import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdiniAccettatiPage } from './ordini-accettati.page';

describe('OrdiniAccettatiPage', () => {
  let component: OrdiniAccettatiPage;
  let fixture: ComponentFixture<OrdiniAccettatiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdiniAccettatiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdiniAccettatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
