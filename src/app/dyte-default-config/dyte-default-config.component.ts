import { Component, OnInit, ViewChild } from '@angular/core';
import { DyteMeeting } from '@dytesdk/angular-ui-kit';
import DyteClient from '@dytesdk/web-core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dyte-default-config',
  templateUrl: './dyte-default-config.component.html',
  styleUrls: ['./dyte-default-config.component.css']
})
export class DyteDefaultConfigComponent implements OnInit {
  
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
  }

}
