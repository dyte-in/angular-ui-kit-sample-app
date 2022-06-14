import { Component, OnInit, ViewChild } from '@angular/core';
import { DyteMeeting } from '@dytesdk/angular-ui-kit';
import DyteClient, { DyteParticipant, DyteParticipants, DyteSelf } from '@dytesdk/web-core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dyte-custom-elements',
  templateUrl: './dyte-custom-elements.component.html',
  styleUrls: ['./dyte-custom-elements.component.css']
})
export class DyteCustomElementsComponent implements OnInit {

  @ViewChild('myid') meetingComponent: DyteMeeting | undefined;
  dyteMeeting: DyteClient | undefined;
  tester = [1, 2, 3, 4];
  dyteParticpants: DyteParticipant[];

  constructor() { 
    this.dyteParticpants = [];
  }

  ngOnInit(): void {
  }

  private particpantJoinedListener(participant: DyteParticipant) {
    this.dyteParticpants = [...this.dyteParticpants, participant];
  }

  private participantLeftListener(particpant: DyteParticipant) {
    this.dyteParticpants = this.dyteParticpants.filter( (particpantItem) => { particpantItem.id !== particpant.id });
  }

  async ngAfterViewInit() {
    const dyteMeeting = await DyteClient.init({
      roomName: environment.roomName,
      authToken: environment.authToken,
      defaults: {
        video: true,
        audio: true,
      },
    });

    dyteMeeting.participants.active.on('participantJoined', (participant) => this.particpantJoinedListener(participant));

    dyteMeeting.participants.active.on('participantLeft', (particpant) => this.participantLeftListener(particpant));

    dyteMeeting.joinRoom();

    this.dyteMeeting = dyteMeeting;
    if (this.meetingComponent) this.meetingComponent.meeting = dyteMeeting;
  }

}
