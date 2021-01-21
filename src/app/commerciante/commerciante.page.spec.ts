import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommerciantePage } from './commerciante.page';

describe('CommerciantePage', () => {
  let component: CommerciantePage;
  let fixture: ComponentFixture<CommerciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerciantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommerciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
