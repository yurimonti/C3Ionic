import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EffettuaOrdinePage } from './effettua-ordine.page';

describe('EffettuaOrdinePage', () => {
  let component: EffettuaOrdinePage;
  let fixture: ComponentFixture<EffettuaOrdinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffettuaOrdinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EffettuaOrdinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
