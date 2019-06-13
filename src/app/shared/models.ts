import { Route } from '@angular/compiler/src/core';
import { RouterLink } from '@angular/router';
import { ParsedEventType } from '@angular/compiler';

export interface MenuItem {
    name: string;
    route?: string[];
    icon?: string;
}

export interface Pet {
    name: string;
    type: PetType;
}

export enum PetType {
    cat = 'Cat',
    dog = 'Dog'
}

export interface Photo {
    time: number;
    petName: string;
    photoUrl: string;
}

export interface Event {
    severity: EventSeverity;
    pet: string;
    message: string;
    time: number;
}

export enum EventSeverity {
    info = 'Info',
    warning = 'Warning',
    error = 'Error'
}
