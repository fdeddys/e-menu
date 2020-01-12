import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EMenuPage } from './e-menu.page';

describe('EMenuPage', () => {
  let component: EMenuPage;
  let fixture: ComponentFixture<EMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
