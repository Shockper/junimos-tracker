import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getZonesSelector } from '../../store/overview/overview.selectors';
import { GlobalState } from '../../store/app.reducer';
import { IZone } from './models';
import { selectUrl } from '../../store/app.reducer';

@Component({
  selector: 'app-overview-dashboard',
  templateUrl: './overview-dashboard.component.html',
  styleUrls: ['./overview-dashboard.component.scss']
})
export class OverviewDashboardComponent implements OnInit {
  public zones$: Observable<IZone[]>;
  public url$: Observable<any>;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {

    this.zones$ = this.store.pipe(select(getZonesSelector));
    this.url$ = this.store.pipe(select(selectUrl));
  }

}
