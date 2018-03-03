import { Injectable } from '@angular/core';

import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions():Promotion[]{
    return PROMOTIONS;
  }

  getPromotion(id: number):Promotion{
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion():Promotion{
    //the filter will return a sub array of dishes so we point [0] to output only one element
    return PROMOTIONS.filter((promo) => (promo.featured))[0];
  }

}
