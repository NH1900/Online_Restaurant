import { Injectable } from '@angular/core';

import {Promotion} from '../shared/promotion';
//import {PROMOTIONS} from '../shared/promotions';

import { Observable } from 'rxjs/Observable';
//这个傻逼of要单独加。
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
//import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
//import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  /*getPromotions():Promise<Promotion[]>{
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: number):Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion():Promise<Promotion>{
    //the filter will return a sub array of dishes so we point [0] to output only one element
    return Promise.resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]);
  }*/

  //test latency using promise
  /*
  getPromotions():Promise<Promotion[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: number):Promise<Promotion>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    });
  }

  getFeaturedPromotion():Promise<Promotion>{
    //the filter will return a sub array of dishes so we point [0] to output only one element
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]), 2000);
    });
  }
  */

 getPromotions():Observable<Promotion[]>{
   return this.restangular.all('promotions').getList();
 }

 getPromotion(id: number):Observable<Promotion>{
  return  this.restangular.one('promotions',id).get();
 }

 getFeaturedPromotion():Observable<Promotion>{
  return this.restangular.all('promotions').getList({featured: true})
  .map(promotions => promotions[0]);
 }

}
