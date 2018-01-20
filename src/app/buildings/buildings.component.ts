import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  farm() {
    let rand = Math.trunc(Math.random() * (4)+2);
    this._dataService.addGold(rand);
    this._dataService.addlog("You've earned " + rand + " gold at the farm.");
  }

  explore() {
    let rand = Math.trunc(Math.random() * (6)+5);
    this._dataService.addGold(rand);
    this._dataService.addlog("You've earned " + rand + " gold exploring.");
    
  }

  gamble() {
    let rand = Math.trunc(Math.random() * (200)-100);
    this._dataService.addGold(rand);
    if (rand >= 0){
      this._dataService.addlog("Look at you go! You just won " + rand + " gold at the casino.");
    }
    else{
      this._dataService.addlog("OH SNAP! You just lost " + rand + " gold at the casino.");
    }
    
    
  }

  train() {
    this._dataService.levelUp();
    this._dataService.addGold(-500);
    this._dataService.addlog("Finshed training. You have leveled up!!");
    
  }
}
