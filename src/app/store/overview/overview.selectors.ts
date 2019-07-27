import { createSelector } from '@ngrx/store';
import { GlobalState } from '../app.reducer';
import { OverviewState } from './overview.reducer';

export const getOverviewState = (state: GlobalState) => state.overviewState;

export const getZonesSelector = createSelector(
  getOverviewState,
  (state: OverviewState) => state.zones
);

