import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RollResultPage } from './roll-result.page';

describe('RollResultPage', () => {
  let component: RollResultPage;
  let fixture: ComponentFixture<RollResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RollResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
