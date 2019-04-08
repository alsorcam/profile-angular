import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProfileComponent } from './profile.component';
import { AppModule } from '../../app.module';

describe('ProfileComponent', () => {
  let fixture: ComponentFixture<ProfileComponent>;
  let compiled: HTMLElement;
  let component: ProfileComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ProfileComponent);
      compiled = fixture.debugElement.nativeElement;
      component = fixture.debugElement.componentInstance;
    });
  }));
  it('should have a header section', async(() => {
    expect(compiled.querySelector('#profileHeader')).toBeTruthy();
  }));
  it('should have thwo columns', async(() => {
    expect(compiled.querySelectorAll('#profileContainer > div').length).toEqual(2);
  }));
  it('should be on read mode', async(() => {
    expect(component.edit).toBeFalsy();
  }));
  it('should have edit button', async(() => {
    fixture.detectChanges();
    const editBtn = fixture.debugElement.query(By.css('#editBtn')).nativeElement;
    expect(editBtn).toBeTruthy();
  }));
  it('should enter edit mode', async(() => {
    fixture.detectChanges();
    const editBtn = fixture.debugElement.query(By.css('#editBtn')).nativeElement;
    editBtn.click();
    expect(component.edit).toBeTruthy();
  }));
});
