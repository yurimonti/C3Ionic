import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControllaOrdiniPage } from './controlla-ordini.page';

describe('ControllaOrdiniPage', () => {
  let component: ControllaOrdiniPage;
  let fixture: ComponentFixture<ControllaOrdiniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllaOrdiniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControllaOrdiniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
