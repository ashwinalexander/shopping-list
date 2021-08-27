import { Component} from "@angular/core";



//decorator so angular knows this is a component
@Component({
selector:'app-header',
templateUrl: './header.component.html'
}
)
export class HeaderComponent{
    collapsed = true;
    
  
    constructor() { }

    ngOnInit(): void {
    }
  

}