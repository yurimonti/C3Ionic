import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AggiungiProdottoPage } from './aggiungi-prodotto.page';

describe('AggiungiProdottoPage', () => {
  let component: AggiungiProdottoPage;
  let fixture: ComponentFixture<AggiungiProdottoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiProdottoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AggiungiProdottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
