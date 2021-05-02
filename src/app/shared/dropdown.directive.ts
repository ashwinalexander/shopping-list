import {Directive,  HostListener, HostBinding} from "@angular/core";

//what should this dropdown do? 
//add a certain css class to the element it sits on
@Directive({
    selector:'[appDropdown]'
})
//add class when element is clicked
//remove class when element is clicked again
export class DropdownDirective{

@HostBinding('class.open') isOpen:Boolean = false;


//listens for an event on the host
@HostListener('click') toggleOpen(){

    this.isOpen = !this.isOpen;
}
}