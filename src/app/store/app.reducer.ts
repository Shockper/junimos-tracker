import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { overviewReducer, OverviewState } from './overview/overview.reducer';

export interface GlobalState {
  overviewState: OverviewState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  overviewState: overviewReducer
};

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
