import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyFavoritePage } from './modify-favorite.page';

describe('ModifyFavoritePage', () => {
  let component: ModifyFavoritePage;
  let fixture: ComponentFixture<ModifyFavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFavoritePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
