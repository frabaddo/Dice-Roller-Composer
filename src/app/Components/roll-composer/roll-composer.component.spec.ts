import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RollComposerComponent } from './roll-composer.component';

describe('RollComposerComponent', () => {
  let component: RollComposerComponent;
  let fixture: ComponentFixture<RollComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollComposerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RollComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
