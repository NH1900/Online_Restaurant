import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';
//这个傻逼of要单独加。
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { ProcessHttpmsgService } from './process-httpmsg.service';
//import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  // can write as getLeaders(): Leader[] no space between "getLeaders():" and "Leader[]"
  /*getLeaders():Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }

  getFeaturedLeader():Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader) => (leader.featured))[0]);
  }*/

  //test latency using pormise
  /*
  getLeaders():Promise<Leader[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS), 2000);
    });
  }*/

  getFeaturedLeader():Observable<Leader>{
    return this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);
    //Observable.of(LEADERS.filter((leader) => (leader.featured))[0]).delay(2000);
  }

  getLeaders():Observable<Leader[]>{
    return this.restangular.all('leaders').getList();
    //Observable.of(LEADERS).delay(2000);
  }
  
}
