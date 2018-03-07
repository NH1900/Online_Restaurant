import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  // can write as getLeaders(): Leader[] no space between "getLeaders():" and "Leader[]"
  getLeaders():Leader[]{
    return LEADERS;
  }

  getFeaturedLeader():Leader{
    return LEADERS.filter((leader) => (leader.featured))[0];
  }
}
