import {Component, OnInit} from '@angular/core';
import {AppLanguage, IAppLanguage} from './app.language';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ariztool';
  // TODO : Get this variable form cookie or for the given user.
  selectedLanguage = localStorage.getItem('arizToolLanguageCode');
  languages: string[] = [
    'gb',
    'fr'
  ];

  appText: IAppLanguage;

  constructor(private readonly appLanguage: AppLanguage, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.selectedLanguage) {
      this.selectedLanguage = 'gb';
    }
    this.loadNewLanguage(this.selectedLanguage, true);
  }

  /**
   * Load the data for the given language.
   * Also add the new language code to the local storage.
   * Finally reload the page.
   *
   * @param newLanguage - The new language to load the data of.
   * @param noReload - Optional, if present don't reload the page.
   */
  loadNewLanguage(newLanguage: string, noReload?: boolean): void {
    this.appText = this.appLanguage[newLanguage];
    localStorage.setItem('arizToolLanguageCode', newLanguage);
    if (!noReload) {
      location.reload();
    }
  }
}
