import { MenuItem } from './../../shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [{ name: 'Home', icon: 'home', route: ['/dashboard']}, { name: 'Settings', icon: 'settings', route: ['/settings'] },
                      { name: 'About', icon: 'info', route: ['/about'] }, { name: 'Help', icon: 'help', route: ['/help'] }];
  }

}
