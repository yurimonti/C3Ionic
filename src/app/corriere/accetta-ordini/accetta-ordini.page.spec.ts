import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccettaOrdiniPage } from './accetta-ordini.page';

describe('AccettaOrdiniPage', () => {
  let component: AccettaOrdiniPage;
  let fixture: ComponentFixture<AccettaOrdiniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccettaOrdiniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccettaOrdiniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
