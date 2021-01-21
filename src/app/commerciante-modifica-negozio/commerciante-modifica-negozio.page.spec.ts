import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommercianteModificaNegozioPage } from './commerciante-modifica-negozio.page';

describe('CommercianteModificaNegozioPage', () => {
  let component: CommercianteModificaNegozioPage;
  let fixture: ComponentFixture<CommercianteModificaNegozioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercianteModificaNegozioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommercianteModificaNegozioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
