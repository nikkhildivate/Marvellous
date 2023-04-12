import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  public Data = "Marvellous Infosystems"
  
  upper(){
    this.Data = this.Data.toUpperCase()
  }
  lower(){
    this.Data = this.Data.toLowerCase()
  }
}
