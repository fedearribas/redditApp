import { RedditsPage } from './../reddits/reddits';
import { RedditService } from './../../app/services/reddit.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }

  getDefaults() {    
    this.category = localStorage.getItem('category') ? localStorage.getItem('category') : 'webdev';
    this.limit = localStorage.getItem('limit') ? localStorage.getItem('limit') : 10;    
  }

  setDefaults() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditsPage);
  }

}
