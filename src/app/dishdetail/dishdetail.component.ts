import { Component, OnInit, Inject } from '@angular/core';

import {Dish} from '../shared/dish';

import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Comment } from '../shared/comment';
import { visibility,expand } from '../animations/app.animation';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    visibility(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {
  //@Input()
  disha: Dish;
  dishIds: number[];
  prev: number;
  next: number;
  errMess: string;

  commentForm: FormGroup;
  commentdata: Comment;
  visibility = 'shown';

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private db: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
      this.createForm();
    }

  createForm(){
    this.commentForm = this.db.group({
      rating: 0,
      comment: '',
      author: '',
    });
  }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(+params['id']); })
      .subscribe(dish => { this.disha = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
      errmess => this.errMess = <any>errmess);
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }
}
