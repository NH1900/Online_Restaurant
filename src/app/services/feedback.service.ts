import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Feedback } from '../shared/feedback';
//这个傻逼of要单独加。
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { ProcessHttpmsgService } from './process-httpmsg.service';
//import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHttpmsgService) { }
  
  submitFeedback(fb: Feedback){
    this.restangular.all('feedback').post(fb);
  }
}
