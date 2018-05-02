import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut,expand } from '../animations/app.animation';
import { Component, OnInit ,Inject} from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutusComponent implements OnInit {
  leaders: Leader[];
  leaderErrMess: string;
  constructor(private leaderService:LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders,errmess => this.leaderErrMess = <any>errmess);
  }

}
