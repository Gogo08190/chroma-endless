onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/refined_storage/shaped/';
    const recipes = [
      ///Advanced exporter
      {
          output: 'extrastorage:advanced_exporter',
          pattern: [' R ', 'AEA', ' R '],
          key: {
              R:'enderioalloys:item_alloy_ingot_redstone_alloy',
              A:'refinedstorage:advanced_processor',
              E:'refinedstorage:exporter'
          },
          id: 'extrastorage:advanced_exporter'
      },
      ///Advanced importer
      {
          output: 'extrastorage:advanced_importer',
          pattern: [' R ', 'AEA', ' R '],
          key: {
              R:'enderioalloys:item_alloy_ingot_redstone_alloy',
              A:'refinedstorage:advanced_processor',
              E:'refinedstorage:importer'
          },
          id: 'extrastorage:advanced_importer'
      },
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
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
