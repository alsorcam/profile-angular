import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/components/profile/profile.component';
import { AppModule } from './app.module';
import { SharedModule } from './shared/components/shared.module';
import { TranslateModule } from '@ngx-translate/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProfileComponent
      ],
      imports: [
        SharedModule,
        TranslateModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as theme 'green'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.selectedTheme).toEqual('green');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app-profile-angular!');
  // }));
});
