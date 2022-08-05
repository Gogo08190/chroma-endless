onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/refined_storage/shaped/';
    const recipes = [
      {
          output: 'scannable:scanner',
          pattern: ['C C', 'SES', 'PRP'],
          key: {
              C:'immersiveengineering:connector_hv',
              S:'immersiveengineering:sheetmetal_steel',
              E:'immersiveengineering:rs_engineering',
              R:'thermal:rf_coil',
              P:'emendatusenigmatica:steel_plate'
          },
          id: 'scannable:scanner'
      },
      {
          output: 'scannable:module_blank',
          pattern: ['GGG', 'GIG', ' P '],
          key: {
              G:'minecraft:green_dye',
              I:'immersiveengineering:circuit_board',
              P:'#forge:plates/gold',
          },
          id: 'scannable:module_blank'
      },
      {
          output: 'scannable:module_range',
          pattern: ['GGG', 'GIG', 'HPH'],
          key: {
              G:'minecraft:green_dye',
              I:'scannable:module_blank',
              H:'immersiveengineering:connector_hv_relay',
              P:'minecraft:ender_eye'
          },
          id: 'scannable:module_range'
      },
      {
          output: 'scannable:module_entity',
          pattern: ['GGG', 'GIG', 'HPH'],
          key: {
              G:'minecraft:green_dye',
              I:'scannable:module_blank',
              H:Item.of('create:super_glue').weakNBT(),
              P:'#forge:eggs'
          },
          id: 'scannable:module_entity'
      },
      {
          output: 'scannable:module_animal',
          pattern: ['GGG', 'GIG', 'HPH'],
          key: {
              G:'minecraft:green_dye',
              I:'scannable:module_blank',
              H:'#minecraft:wool',
              P:Item.of('apotheosis:farmers_leash').weakNBT()
          },
          id: 'scannable:module_animal'
      },
      {
          output: 'scannable:module_monster',
          pattern: ['GGG', 'GIG', 'HPH'],
          key: {
              G:'minecraft:green_dye',
              I:'scannable:module_blank',
              H:'#forge:bones',
              P:'architects_palette:withered_bone_block'
          },
          id: 'scannable:module_monster'
      },
      {
          output: 'scannable:module_block',
          pattern: ['GGG', 'GIG', 'HPH'],
          key: {
              G:'minecraft:green_dye',
              I:'scannable:module_blank',
              H:'#chisel:mud_bricks',
              P:'immersiveengineering:concrete'
          },
          id: 'scannable:module_block'
      },
      {
          output: 'scannable:module_ore_common',
          pattern: ['GGG', 'GIG', 'HPH'],
          key: {
              G:'minecraft:green_dye',
              I:'scannable:module_blank',
              H:'#forge:plates/iron',
              P:'emendatusenigmatica:coke_block'
          },
          id: 'scannable:module_ore_common'
      },
      {
          output: 'scannable:module_ore_rare',
          pattern: ['GGG', 'GIG', 'HPH'],
          key: {
              G:'minecraft:green_dye',
              I:'scannable:module_blank',
              H:'#forge:plates/electrum',
              P:'occultism:spirit_attuned_gem'
          },
          id: 'scannable:module_ore_rare'
      },
      {
          output: 'scannable:module_fluid',
          pattern: ['GGG', 'GIG', 'HPH'],
          key: {
              G:'minecraft:green_dye',
              I:'scannable:module_blank',
              H:'dustrial_decor:rusty_iron_ingot',
              P:'minecraft:water_bucket'
          },
          id: 'scannable:module_fluid'
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
