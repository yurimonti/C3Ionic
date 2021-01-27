import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrierePage } from './corriere.page';

describe('CorrierePage', () => {
  let component: CorrierePage;
  let fixture: ComponentFixture<CorrierePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrierePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
