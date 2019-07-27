import { createReducer, on } from '@ngrx/store';
import { increment } from './overview.actions';

export interface OverviewState {
  zones: any;
}

const initialState: OverviewState = {
  zones: 32
};

export const overviewReducer = createReducer(
  initialState,
  on(increment, (state: OverviewState) => ({...state, zones: state.zones + 1}))
);
