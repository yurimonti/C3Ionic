import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaNegozioPage } from './modifica-negozio.page';

describe('ModificaNegozioPage', () => {
  let component: ModificaNegozioPage;
  let fixture: ComponentFixture<ModificaNegozioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaNegozioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaNegozioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
