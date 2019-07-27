import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { overviewReducer, OverviewState } from './overview/overview.reducer';
import { getSelectors, routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface GlobalState {
  overviewState: OverviewState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  overviewState: overviewReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];

export const {
  selectQueryParams,    // select the current route query params
  selectRouteParams,    // select the current route params
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = getSelectors((state: GlobalState) => state.router);
