import { Route } from '@angular/compiler/src/core';
import { RouterLink } from '@angular/router';

export interface MenuItem {
    name: string;
    route?: string[];
    icon?: string;
}
