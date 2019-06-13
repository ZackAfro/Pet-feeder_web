import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './../shared/shared.module';
import { ActionsComponent } from './actions/actions.component';
import { PhotoRollComponent } from './photo-roll/photo-roll.component';
import { VideoComponent } from './video/video.component';
import { NgModule } from '@angular/core';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
    declarations: [
        ActionsComponent,
        PhotoRollComponent,
        VideoComponent,
        TimelineComponent,
        DashboardComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ActionsComponent,
        PhotoRollComponent,
        VideoComponent,
        TimelineComponent,
        DashboardComponent,
        SharedModule
    ]
})
export class DashboardModule { }
