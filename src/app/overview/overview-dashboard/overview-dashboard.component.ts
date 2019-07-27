import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getZonesSelector } from '../../store/overview/overview.selectors';
import { increment } from '../../store/overview/overview.actions';
import { GlobalState } from '../../store/app.reducer';

@Component({
  selector: 'app-overview-dashboard',
  templateUrl: './overview-dashboard.component.html',
  styleUrls: ['./overview-dashboard.component.scss']
})
export class OverviewDashboardComponent implements OnInit {

  public zones = Constants.zones;
  public zones$: Observable<any>;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {

    this.zones$ = this.store.pipe(select(getZonesSelector));
  }

  public increment() {
    this.store.dispatch(increment());
  }

}
