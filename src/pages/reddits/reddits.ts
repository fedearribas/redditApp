import { DetailsPage } from './../details/details';
import { RedditService } from './../../app/services/reddit.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage implements OnInit {

  items: any;
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }

  ngOnInit() {
    this.getPosts(this.category, this.limit);
  }

  getDefaults() {    
    this.category = localStorage.getItem('category') ? localStorage.getItem('category') : 'webdev';
    this.limit = localStorage.getItem('limit') ? localStorage.getItem('limit') : 10;    
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(
      res => {
        this.items = res.data.children;
        console.log(this.items);
      }
    );
  }

  onViewItem(item) {
    this.navCtrl.push(DetailsPage, {item: item});
  }

  onChangeCategory() {
    this.getPosts(this.category, this.limit);
  }

}
