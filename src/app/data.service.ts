import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class DataService {
  Gold:number = 0;
  Lvl:number = 0;
  Ninja:Array<string> = ["Academy Student", "Genin", "Chuunin", "Jounin", "Kage", "Anbu", "S-Class"]
  Logs:Array<string> = [];
  GoldObserver = new BehaviorSubject(this.Gold);
  LogObserver = new BehaviorSubject(this.Logs);

  constructor() {
    console.log("im in service") 
  }
  
  retrieveGold(): number{
    return this.Gold;
    
  }

  addGold(num: number){
    console.log(num)
    this.Gold += num;
    this.GoldObserver.next(this.Gold);
    
    
  }

  addlog(log){
    this.Logs.push(log);
    this.LogObserver.next(this.Logs);
  }

  levelUp(){
    this.Lvl += 1; 
  }
    
  
}
