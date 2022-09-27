import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlarmC } from '../../classes/alarm-c';
import { MatDialog } from '@angular/material/dialog';
import { AlarmModalComponent } from '../alarm-modal/alarm-modal.component';
import { ConfirmComponent } from '../../../messages/confirm/confirm.component';
import { AlarmResponse } from '../../classes/alarm-response';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss'],
})
export class AlarmComponent implements OnInit {
  @Input() alarm!: AlarmC;

  @Output() updateO: EventEmitter<AlarmResponse> = new EventEmitter();

  @Output() deleteO: EventEmitter<AlarmResponse> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public update(): void {
    const dialogRef = this.dialog.open(AlarmModalComponent, {
      data: AlarmC.cloned(this.alarm),
    });
    dialogRef.afterClosed().subscribe((response: AlarmResponse) => {
      this.updateO.emit(response);
    });
  }

  public delete(): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe((response: boolean) => {
      this.deleteO.emit(new AlarmResponse(this.alarm, response));
    });
  }
}
