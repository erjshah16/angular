import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }
  itemList:Item[] = [{
    itemName: 'Federation Phaser',
    itemDesc: '',
    configration: [
      {lable: 'FORM FACTOR',
      Name: 'Compact' ,
      price: 545,
      desc: ''
    },{lable: 'FORM FACTOR',
      Name: 'Pistol Grip',
      price: 600,
      desc: ''
    }]
  },{
    itemName: 'Light Saber',
    itemDesc: '',
    configration: [
      {lable: 'BLADE COLOR',
      Name: 'Red' ,
      'blade Count': 'single',
      price: 1000,
      desc: ''
      },{lable: 'BLADE COLOR',
      Name: 'Red' ,
      'blade Count': 'Double',
      price: 1750,
      desc: ''
      },{lable: 'BLADE COLOR',
      Name: 'Blue' ,
      'blade Count': 'single',
      price: 1125,
      desc: ''
      },{lable: 'BLADE COLOR',
      Name: 'Blue' ,
      'blade Count': 'Double',
      price: 1875,
      desc: ''
      },{lable: 'BLADE COLOR',
      Name: 'Green' ,
      'blade Count': 'single',
      price: 1250,
      desc: ''
    }]
  }];
  ngOnInit() {
    console.log(this.itemList);
  }

}
