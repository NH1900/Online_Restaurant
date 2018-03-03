import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }
  getDishes():Dish[]{
    return DISHES;
  }

  getDish(id: number):Dish{
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish():Dish{
    //the filter will return a sub array of dishes so we point [0] to output only one element
    return DISHES.filter((dish) => (dish.featured))[0];
  }
}
