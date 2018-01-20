import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  Gold:number;
  Ninja:string;

  constructor(private _dataService: DataService) {
    console.log('im app component')
    this.Ninja ="Noob";
    this._dataService.GoldObserver.subscribe(Gold=>{
      this.Gold = Gold;
    });
  }
  ngOnInit(){
    
  }



}
