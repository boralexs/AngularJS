import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
  // @ts-ignore
  public getMeetings(): Observable<Array<Meeting>> {
    const meetings: Array<Meeting> = [];
    meetings.push({title: 'Concert1', date: new Date(Date.parse('01.01.2020')), numberOfAttendencies: 100});
    meetings.push({title: 'Concert2', date: new Date(Date.parse('02.01.2020')), numberOfAttendencies: 100});
    meetings.push({title: 'Concert3', date: new Date(Date.parse('03.03.2020')), numberOfAttendencies: 100});
    return of(meetings);
  }

  constructor() { }
}

export class Meeting {
  public title: string;
  public date: Date;
  public numberOfAttendencies: number;
}
