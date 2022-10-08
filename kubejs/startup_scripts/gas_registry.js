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
        color: 2486811,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Green Gas'
      },
      //Pink
      {
        id: 'pink',
        color: 16711854,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Pink Gas'
      },
      //Red
      {
        id: 'red',
        color: 16711684,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Red Gas'
      },
      //blue
      {
        id: 'blue',
        color: 2752767,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Blue Gas'
      },
      //orange
      {
        id: 'orange',
        color: 15744019,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Orange Gas'
      },
      //purple
      {
        id: 'purple',
        color: 13048818,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Purple Gas'
      },
      ];
      generalGas.forEach((gas) => {
          event.create(gas.id).color(gas.color).texture(gas.texture).displayName(gas.display);
      });
  });
