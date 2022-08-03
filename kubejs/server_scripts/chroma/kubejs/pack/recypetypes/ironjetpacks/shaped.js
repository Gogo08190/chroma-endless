onEvent('recipes', (event) => {
    /*
        ,
        {
            output: ,
            pattern: ['', '', ''],
            key: {
                A:
            },
            id: ''
        }
    */
    const id_prefix = 'chroma:base/ironjetpacks/shaped/';
    const recipes = [
      {
          output: 'ironjetpacks:mechanical_cell' ,
          pattern: ['SES', 'SFS', 'SES'],
          key: {
              S:'create:shaft',
              E:'create:electron_tube',
              F:'create:flywheel'
          },
          id: `${id_prefix}mechanical_cell`
      },
      {
          output: 'ironjetpacks:basic_coil',
          pattern: [' AR', 'AEA', 'RA '],
          key: {
              A:'create:andesite_alloy',
              E:'create:electron_tube',
              R:'extendedcrafting:redstone_ingot'
          },
          id: `ironjetpacks:basic_coil`
      },
      {
          output: 'ironjetpacks:advanced_coil',
          pattern: [' AR', 'AEA', 'RA '],
          key: {
              A:'elementalcraft:swift_alloy_ingot',
              E:'botania:rune_fire',
              R:'extendedcrafting:redstone_ingot'
          },
          id: 'ironjetpacks:advanced_coil'
      },
      {
          output: 'ironjetpacks:elite_coil',
          pattern: [' AR', 'AEA', 'RA '],
          key: {
              A:'bigreactors:cyanite_ingot',
              E:'bigreactors:magentite_ingot',
              R:'extendedcrafting:redstone_ingot'
          },
          id: 'ironjetpacks:elite_coil'
      },
      {
          output: 'ironjetpacks:ultimate_coil',
          pattern: [' AR', 'AEA', 'RA '],
          key: {
              A:'powah:crystal_spirited',
              E:'powah:crystal_nitro',
              R:'extendedcrafting:redstone_ingot'
          },
          id: 'ironjetpacks:ultimate_coil'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
