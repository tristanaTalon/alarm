import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-option-search',
  templateUrl: './option-search.component.html',
  styleUrls: ['./option-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OptionSearchComponent implements OnInit {
  search!: string;

  isInputFocused!: boolean;

  @Output() searchO: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.search = '';
    this.isInputFocused = false;
  }

  ngOnInit(): void {}

  public isVisibleButton(): boolean {
    return this.search.length == 0 && !this.isInputFocused;
  }

  public isVisibleInput(): boolean {
    return !this.isVisibleButton();
  }

  public focusInput(): void {
    this.isInputFocused = true;
  }

  public unfocusInput(): void {
    this.isInputFocused = false;
  }

  public isVisibleRemoveButton(): boolean {
    return this.isVisibleInput() && this.search.length != 0;
  }

  public resetSearch(): void {
    this.search = '';
    this.focusInput();
    this.changeSearch();
  }

  public changeSearch() {
    this.searchO.emit(this.search);
  }
}
