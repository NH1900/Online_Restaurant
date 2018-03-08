import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

import { Observable } from 'rxjs/Observable';
//这个傻逼of要单独加。
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class DishService {

  constructor() { }
  //test just for resolve data using promise
  /*getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }*/

  //test for lantency using promise
  /*getDishes(): Promise<Dish[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: number): Promise<Dish> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }*/

  //test observable
  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }

  getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id ));
  }
}
