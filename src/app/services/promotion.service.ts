import { Injectable } from '@angular/core';

import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
@Injectable()
export class PromotionService {

  constructor() { }

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
}
