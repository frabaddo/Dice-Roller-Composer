import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeRollPage } from './make-roll.page';

describe('MakeRollPage', () => {
  let component: MakeRollPage;
  let fixture: ComponentFixture<MakeRollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeRollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeRollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
