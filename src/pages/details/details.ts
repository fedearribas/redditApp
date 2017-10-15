import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit {
  item: any;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = this.params.get('item');
  }

  ngOnInit() {

  }

}
