import { Injectable } from '@angular/core';

import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions():Promise<Promotion[]>{
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: number):Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion():Promise<Promotion>{
    //the filter will return a sub array of dishes so we point [0] to output only one element
    return Promise.resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]);
  }

}
