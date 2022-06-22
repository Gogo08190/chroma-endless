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
    const recipes = [
      //Iron Crafter
      {
          output: 'extrastorage:iron_crafter',
          pattern: ['BSB', 'NCN', 'QUQ'],
          key: {
              B:'mekanism:basic_control_circuit',
              S:'pneumaticcraft:smart_chest',
              N:'extrastorage:neural_processor',
              C:'refinedstorage:crafter',
              Q:'refinedstorage:quartz_enriched_iron',
              U:'thermal:upgrade_augment_1'
          },
          id: 'extrastorage:iron_crafter'
      },
      //Gold Crafter
      {
          output: 'extrastorage:gold_crafter',
          pattern: ['BSB', 'NCN', 'QUQ'],
          key: {
              B:'mekanism:advanced_control_circuit',
              S:'pneumaticcraft:smart_chest',
              N:'extrastorage:neural_processor',
              C:'extrastorage:iron_crafter',
              Q:'refinedstorage:quartz_enriched_iron',
              U:'thermal:upgrade_augment_2'
          },
          id: 'extrastorage:gold_crafter'
      },
      //Diamond Crafter
      {
          output: 'extrastorage:diamond_crafter',
          pattern: ['BSB', 'NCN', 'QUQ'],
          key: {
              B:'mekanism:elite_control_circuit',
              S:'pneumaticcraft:smart_chest',
              N:'extrastorage:neural_processor',
              C:'extrastorage:gold_crafter',
              Q:'refinedstorage:quartz_enriched_iron',
              U:'thermal:upgrade_augment_3'
          },
          id: 'extrastorage:diamond_crafter'
      },

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
