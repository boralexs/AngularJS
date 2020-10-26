import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetingListComponent} from './meeting-list/meeting-list.component';
import {MeetingsAttendComponent} from './meetings-attend/meetings-attend.component';
import {CreateMeetingsComponent} from './create-meetings/create-meetings.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MeetingListComponent},
  {path: 'attend/:id', component: MeetingsAttendComponent},
  {path: 'create/:id', component: CreateMeetingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
