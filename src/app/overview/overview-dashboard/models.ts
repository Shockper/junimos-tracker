
export interface IZone {
  id: number;
  name: string;
  reward: string;
  flowers: IFlower[];
}

export interface IFlower {
  id: number;
  name: string;
  required: number;
  completed: boolean;
  items?: any;
}
