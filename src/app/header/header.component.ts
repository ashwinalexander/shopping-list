import { Component, OnInit, Output, EventEmitter } from "@angular/core";



//decorator so angular knows this is a component
@Component({
selector:'app-header',
templateUrl: './header.component.html'
}
)
export class HeaderComponent  implements OnInit {
    @Output() featureSelected = new EventEmitter<string>();
    collapsed = true;
    
    onSelect(feature: string){
        this.featureSelected.emit(feature);        
    }

    constructor() { }

    ngOnInit(): void {
    }
  

}