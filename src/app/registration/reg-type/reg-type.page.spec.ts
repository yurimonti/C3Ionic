import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegTypePage } from './reg-type.page';

describe('RegTypePage', () => {
  let component: RegTypePage;
  let fixture: ComponentFixture<RegTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
