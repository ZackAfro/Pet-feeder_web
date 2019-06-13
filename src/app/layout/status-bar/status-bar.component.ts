import { Pet, PetType } from './../../shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  nextScheduledFeeding: number;
  currentUser;
  daysFoodLeft;
  currentPet: Pet;
  snacksLeft;

  pets: Pet[] = [{name: 'Lumo', type: PetType.dog}, {name: 'Tippie', type: PetType.dog}];

  constructor() { }

  ngOnInit() {
    this.snacksLeft = '20';
    this.currentPet = this.pets[0];
    this.currentUser = 'Neil Beukes';
    this.daysFoodLeft = '7';
    this.nextScheduledFeeding = Date.now();
  }

  selectCurrentPet(pet) {
    this.currentPet = pet;
  }

}
