import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestisciOrdiniPage } from './gestisci-ordini.page';

describe('GestisciOrdiniPage', () => {
  let component: GestisciOrdiniPage;
  let fixture: ComponentFixture<GestisciOrdiniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestisciOrdiniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestisciOrdiniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
