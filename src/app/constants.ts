
export class Constants {

  public static zones = [
    {
      id: 1,
      name: 'Crafts Room',
      reward: 'Bridge Repair',
      flowers: [
        {
          id: 1,
          name: 'Spring Foraging Bundle',
          required: 4,
          completed: true,
          items: [
            {
              index: 1,
              name: 'Wild Horseradish',
              quantity: 5,
              obtaining: 'Fish during day'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Pantry',
      reward: 'Greenhouse',
      flowers: [
        {
          id: 1,
          name: 'Spring Crops Bundle',
          required: 4,
          completed: false,
          items: [
            {
              index: 1,
              name: 'Parsnip',
              quantity: 1,
              obtaining: 'Forest during Fall'
            }
          ]
        }
      ]
    }
  ];
}
