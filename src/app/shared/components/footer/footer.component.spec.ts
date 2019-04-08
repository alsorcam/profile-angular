import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { AppModule } from './../../../app.module';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(FooterComponent);
      compiled = fixture.debugElement.nativeElement;
    });
  }));
  it('should have one footer', async(() => {
    expect(compiled.querySelector('footer')).toBeTruthy();
  }));
  it('should have two sections', async(() => {
    expect(compiled.querySelectorAll('div').length).toEqual(2);
  }));
  it('should have two links', async(() => {
    expect(compiled.querySelectorAll('a').length).toEqual(2);
  }));
});
