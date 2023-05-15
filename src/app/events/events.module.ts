import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    EventsComponent,
    EventDetailComponent
  ],
  imports: [
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
