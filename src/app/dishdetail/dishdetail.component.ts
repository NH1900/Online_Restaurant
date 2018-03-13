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

  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required':      'Name is required.',
      'minlength':     ' Name must be at least 2 characters long.'
    },
    'comment': {
      'required':      'commet is required.'
    },
  };
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
      comment: ['', [Validators.required]],
      author: ['', [Validators.required, Validators.minLength(2)]],
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.commentdata = this.commentForm.value;
    console.log(this.commentdata);
    this.commentForm.reset({
      rating: 0,
      comment: '',
      author: ''
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
