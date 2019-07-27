
export class Constants {

  public static zones = [
    {
      idZone: 1,
      name: 'Crafts Room',
      reward: 'Bridge Repair',
      flowers: [
        {
          idFlower: 1,
          name: 'Spring Foraging Bundle',
          numRequired: 4,
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
      idZone: 2,
      name: 'Pantry',
      reward: 'Greenhouse',
      flowers: [
        {
          idFlower: 1,
          name: 'Spring Crops Bundle',
          numRequired: 4,
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
