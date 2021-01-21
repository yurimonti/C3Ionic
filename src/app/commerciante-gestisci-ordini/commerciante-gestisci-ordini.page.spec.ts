import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommercianteGestisciOrdiniPage } from './commerciante-gestisci-ordini.page';

describe('CommercianteGestisciOrdiniPage', () => {
  let component: CommercianteGestisciOrdiniPage;
  let fixture: ComponentFixture<CommercianteGestisciOrdiniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercianteGestisciOrdiniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommercianteGestisciOrdiniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
