import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  Logs:Array<string>;

  constructor(private _dataService: DataService) {
    this._dataService.LogObserver.subscribe(Logs=>{
      this.Logs = Logs;
    });
   }

  ngOnInit() {
  }

}
