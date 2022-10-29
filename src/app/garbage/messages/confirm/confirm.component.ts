import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlarmModalComponent } from '../../alarm/components/alarm-modal/alarm-modal.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  msg!: string;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.msg = this.getMsg();
  }

  ngOnInit(): void {}

  private getMsg(): string {
    if (this.data) {
      return this.data;
    }
    return 'Are you sure?';
  }

  public accept(): void {
    this.dialogRef.close(true);
  }

  public cancel(): void {
    this.dialogRef.close(false);
  }
}
