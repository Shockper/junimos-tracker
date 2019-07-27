import { createReducer, on } from '@ngrx/store';
import { Constants } from '../../constants';
import { IZone } from '../../overview/overview-dashboard/models';

export interface OverviewState {
  zones: IZone[];
}

const initialState: OverviewState = {
  zones: Constants.zones
};

export const overviewReducer = createReducer(
  initialState
);
