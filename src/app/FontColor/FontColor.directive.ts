import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fontColor]'
})
export class FontColorDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.color = '#EEBA33';
  }
}
