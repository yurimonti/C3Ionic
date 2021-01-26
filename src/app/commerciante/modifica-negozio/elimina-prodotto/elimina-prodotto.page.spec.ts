import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminaProdottoPage } from './elimina-prodotto.page';

describe('EliminaProdottoPage', () => {
  let component: EliminaProdottoPage;
  let fixture: ComponentFixture<EliminaProdottoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaProdottoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminaProdottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
