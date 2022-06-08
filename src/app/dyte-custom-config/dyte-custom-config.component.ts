import { Component, OnInit, ViewChild } from '@angular/core';
import { DyteMeeting } from '@dytesdk/angular-ui-kit';
import DyteClient from '@dytesdk/web-core';
import { environment } from 'src/environments/environment';
import { dyteUIConfig } from './dyte-ui-config';

@Component({
  selector: 'app-dyte-custom-config',
  templateUrl: './dyte-custom-config.component.html',
  styleUrls: ['./dyte-custom-config.component.css']
})
export class DyteCustomConfigComponent implements OnInit {
  
  @ViewChild('myid') meetingComponent: DyteMeeting | undefined;
  dyteMeeting: DyteClient | undefined;

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
    if (this.meetingComponent) this.meetingComponent.config = dyteUIConfig;
  }

}
