import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgmComponent } from './agm.component';

describe('AgmComponent', () => {
  let component: AgmComponent;
  let fixture: ComponentFixture<AgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
