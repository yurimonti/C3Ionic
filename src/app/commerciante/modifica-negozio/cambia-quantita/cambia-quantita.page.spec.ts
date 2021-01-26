import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiaQuantitaPage } from './cambia-quantita.page';

describe('CambiaQuantitaPage', () => {
  let component: CambiaQuantitaPage;
  let fixture: ComponentFixture<CambiaQuantitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiaQuantitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiaQuantitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
