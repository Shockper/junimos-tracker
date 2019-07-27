import { createSelector } from '@ngrx/store';
import { GlobalState } from '../app.reducer';
import { OverviewState } from './overview.reducer';
import { IZone } from '../../overview/overview-dashboard/models';

export const getOverviewState = (state: GlobalState) => state.overviewState;

export const getZonesSelector = createSelector(
  getOverviewState,
  (state: OverviewState): IZone[] => state.zones
);

