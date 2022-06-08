import { Component, OnInit, ViewChild } from '@angular/core';
import { DyteMeeting } from '@dytesdk/angular-ui-kit';
import DyteClient, { DyteParticipants, DyteSelf } from '@dytesdk/web-core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dyte-custom-elements',
  templateUrl: './dyte-custom-elements.component.html',
  styleUrls: ['./dyte-custom-elements.component.css']
})
export class DyteCustomElementsComponent implements OnInit {

  @ViewChild('myid') meetingComponent: DyteMeeting | undefined;
  dyteMeeting: DyteClient | undefined;
  dyteSelf: DyteSelf | undefined;
  dyteParticipants: DyteParticipants | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  async ngAfterViewInit() {
    const meeting = await DyteClient.init({
      roomName: environment.roomName,
      authToken: environment.authToken,
      defaults: {
        video: true,
        audio: true,
      },
    });
    meeting.joinRoom();
    this.dyteMeeting = meeting;
    if (this.meetingComponent) this.meetingComponent.meeting = meeting;
  }

}
