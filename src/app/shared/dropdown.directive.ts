import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {

@HostBinding('class.open') isOpen: boolean = false;

@HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
}
  

onOpen() {
    this.isOpen = true;
  }
}
