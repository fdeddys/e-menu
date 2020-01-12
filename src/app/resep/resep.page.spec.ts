import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResepPage } from './resep.page';

describe('ResepPage', () => {
  let component: ResepPage;
  let fixture: ComponentFixture<ResepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
