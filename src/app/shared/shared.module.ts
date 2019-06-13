import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        MaterialModule,
        CommonModule
    ]
})
export class SharedModule { }
