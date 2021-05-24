import {Directive,  HostListener, HostBinding, ElementRef} from "@angular/core";

//what should this dropdown do? 
//add a certain css class to the element it sits on
@Directive({
    selector:'[appDropdown]'
})
//add class when element is clicked
//remove class when element is clicked again
export class DropdownDirective{


//binds to a     
@HostBinding('class.open') isOpen:Boolean = false;

//another way starts
@HostListener('document:click', ['$event']) altToggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}
//another way ends

//listens for an event on the host
@HostListener('click') toggleOpen(){

    this.isOpen = !this.isOpen;
}
}