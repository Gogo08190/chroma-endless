onEvent('gas.registry', (event) => {
    const generalGas = [
      {
        id: 'black',
        color: 000000,
        texture: 'kubejs:gas/base_gas_texture',
        display: 'Black Gas'
      },
      ];
      generalGas.forEach((gas) => {
          event.create(gas.id).color(gas.color).texture(gas.texture).displayName(gas.display);
      });
  });
