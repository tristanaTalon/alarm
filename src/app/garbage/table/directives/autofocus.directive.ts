import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective {
  constructor(private host: ElementRef) {}

  ngOnInit() {
    window.setTimeout(() => {
      this.host.nativeElement.focus();
    });
  }
}
