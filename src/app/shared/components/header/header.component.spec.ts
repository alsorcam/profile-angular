import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppModule } from './../../../app.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      debug = fixture.debugElement;
      component = debug.componentInstance;
      compiled = debug.nativeElement;
    });
  }));
  it('should have a dropdown', async(() => {
    expect(compiled.querySelector('.dropdown')).toBeTruthy();
  }));
  it('should have color themes loaded', async(() => {
    expect(component.colorThemes.length).toBeGreaterThan(0);
  }));
  it('should emit onThemeChanged', () => {
    fixture.detectChanges();
    spyOn(component.onThemeChanged, 'emit');
    const optionMenu = compiled.querySelector('.dropdown-item:nth-child(3)') as HTMLElement;
    optionMenu.click();
    expect(component.onThemeChanged.emit).toHaveBeenCalled();
  });
});