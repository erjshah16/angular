import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentOrientation = 'horizontal';
  navdirectivedata = [{"hhref":"#home","hname":"Home"},
    {"hhref":"#gridshop","hname":"Product"},
    {"hhref":"#about","hname":"About Us"}];
    constructor() { }
  ngOnInit() {
  }

}
