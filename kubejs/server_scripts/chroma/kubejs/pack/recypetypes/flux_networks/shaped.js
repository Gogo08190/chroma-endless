onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'fluxnetworks:flux_plug',
          pattern: [' AB', 'ACA', 'BA '],
          key: {
              A: 'fluxnetworks:flux_core',
              B: 'thermal:rf_coil',
              C: 'fluxnetworks:flux_block'
          },
          id: 'fluxnetworks:fluxplug'
      },

      {
          output: 'fluxnetworks:flux_point',
          pattern: [' AB', 'ACA', 'BA '],
          key: {
              A: 'fluxnetworks:flux_core',
              B: 'thermal:rf_coil',
              C: 'extendedcrafting:redstone_ingot_block'
          },
          id: 'fluxnetworks:fluxpoint'
      },

      {
          output: 'fluxnetworks:flux_controller',
          pattern: ['ABA', 'CDC', 'AAA'],
          key: {
              A: 'fluxnetworks:flux_block',
              B: 'fluxnetworks:flux_core',
              C: 'fluxnetworks:flux_dust',
              D: 'immersiveengineering:circuit_board'
          },
          id: 'fluxnetworks:fluxcontroller'
      },

      {
          output: Item.of('fluxnetworks:flux_core', 4),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A: 'fluxnetworks:flux_dust',
              B: '#forge:obsidian',
              C: '#forge:ingots/enderium'
          },
          id: 'fluxnetworks:fluxcore'
      },

      {
          output: 'fluxnetworks:flux_configurator',
          pattern: [' AB', ' CA', 'C  '],
          key: {
              A: 'fluxnetworks:flux_dust',
              B: 'emendatusenigmatica:enderium_gear',
              C: '#forge:obsidian'
          },
          id: 'fluxnetworks:fluxconfigurator'
      },

      {
          output: 'fluxnetworks:basic_flux_storage',
          pattern: ['AAA', 'BCB', 'AAA'],
          key: {
              A: 'fluxnetworks:flux_block',
              B: 'thermal:enderium_glass',
              C: 'thermal:upgrade_augment_1'
          },
          id: 'fluxnetworks:basicfluxstorage'
      },

      {
          output: 'fluxnetworks:herculean_flux_storage',
          pattern: ['AAA', 'BCB', 'AAA'],
          key: {
              A: 'fluxnetworks:basic_flux_storage',
              B: 'thermal:enderium_glass',
              C: 'thermal:upgrade_augment_2'
          },
          id: 'fluxnetworks:herculeanfluxstorage'
      },

      {
          output: 'fluxnetworks:gargantuan_flux_storage',
          pattern: ['AAA', 'BCB', 'AAA'],
          key: {
              A: 'fluxnetworks:herculean_flux_storage',
              B: 'thermal:enderium_glass',
              C: 'thermal:upgrade_augment_3'
          },
          id: 'fluxnetworks:gargantuanfluxstorage'
      }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
