import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/shared/models';

@Component({
  selector: 'app-photo-roll',
  templateUrl: './photo-roll.component.html',
  styleUrls: ['./photo-roll.component.scss']
})
export class PhotoRollComponent implements OnInit {

  photos: Photo[];

  constructor() { }

  ngOnInit() {
    this.photos = [{petName: 'Lumo', time: Date.now(), photoUrl: 'https://i.imgur.com/rgJPLx1.jpg'},
    {petName: 'Tippie', time: Date.now(), photoUrl: 'https://i.imgur.com/rgJPLx1.jpg'},
    {petName: 'Lumo', time: Date.now(), photoUrl: 'https://i.imgur.com/rgJPLx1.jpg'},
    {petName: 'Tippie', time: Date.now(), photoUrl: 'https://i.imgur.com/rgJPLx1.jpg'}];
  }

}
