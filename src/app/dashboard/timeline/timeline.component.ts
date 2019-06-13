import { Event, EventSeverity } from './../../shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  events: Event[];

  constructor() { }

  ngOnInit() {
    this.events = [{pet: 'Lumo', severity: EventSeverity.info, message: 'Received one food serving', time: Date.now()},
    {pet: 'Tippie', severity: EventSeverity.error, message: 'No snacks left', time: Date.now()},
    {pet: 'Lumo', severity: EventSeverity.warning, message: 'Food level low', time: Date.now()},
    {pet: 'Lumo', severity: EventSeverity.info, message: 'Received one snack', time: Date.now()},
    {pet: 'Tippie', severity: EventSeverity.info, message: 'Received one food serving', time: Date.now()},
    {pet: 'Lumo', severity: EventSeverity.info, message: 'Received one food serving', time: Date.now()}];
  }

}
