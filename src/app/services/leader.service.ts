import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  // can write as getLeaders(): Leader[] no space between "getLeaders():" and "Leader[]"
  /*getLeaders():Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }

  getFeaturedLeader():Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader) => (leader.featured))[0]);
  }*/

  getLeaders():Promise<Leader[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getFeaturedLeader():Promise<Leader>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((leader) => (leader.featured))[0]), 2000);
    });
  }

  
}
