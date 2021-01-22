import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestisciNegozioPage } from './gestisci-negozio.page';

describe('GestisciNegozioPage', () => {
  let component: GestisciNegozioPage;
  let fixture: ComponentFixture<GestisciNegozioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestisciNegozioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestisciNegozioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
