import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorI } from '../../models/interface/paginator/paginator-i';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() paginator!: PaginatorI;

  @Output() pageEventO: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  constructor() {}

  ngOnInit(): void {}

  public pageEvent(pageEvent: PageEvent): void {
    this.updatePaginator(pageEvent);
    this.pageEventO.emit(pageEvent);
  }

  private updatePaginator(pageEvent: PageEvent): void {
    this.paginator.pageIndex = pageEvent.pageIndex;
    this.paginator.pageSize = pageEvent.pageSize;
  }

  show() {
    console.log(this.paginator);
  }
}
