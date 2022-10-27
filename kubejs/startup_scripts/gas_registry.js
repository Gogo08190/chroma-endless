onEvent('gas.registry', (event) => {
    const generalGas = [
      //Black
      {
        id: 'black',
        color: 000000,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Black Gas'
      },
      //Light
      {
        id: 'light',
        color: 16777215,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Light Gas'
      },
      //Green
      {
        id: 'green',
        color: 4648251,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Green Gas'
      },
      //Pink
      {
        id: 'pink',
        color: 15547316,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Pink Gas'
      },
      //Red
      {
        id: 'red',
        color: 15548731,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Red Gas'
      },
      //blue
      {
        id: 'blue',
        color: 3925997,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Blue Gas'
      },
      //orange
      {
        id: 'orange',
        color: 15571259,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Orange Gas'
      },
      //purple
      {
        id: 'purple',
        color: 12991469,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Purple Gas'
      },
      //phenolsulfonephtaleine
      {
        id: 'phenolsulfonephtaleine',
        color: 13380416,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Phenolsulfonephtaleine'
      },
      //lime_hexasulfuric
      {
        id: 'lime_hexasulfuric',
        color: 48415,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Lime hexasulfuric'
      }
      ];
      generalGas.forEach((gas) => {
          event.create(gas.id).color(gas.color).texture(gas.texture).displayName(gas.display);
      });
  });
