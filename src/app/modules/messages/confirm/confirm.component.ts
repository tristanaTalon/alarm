import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlarmC } from '../../alarm/classes/alarm-c';
import { AlarmModalComponent } from '../../alarm/components/alarm-modal/alarm-modal.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AlarmModalComponent>,
    
  ) {}

  ngOnInit(): void {}

  accept(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
